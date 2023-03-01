import { atom, selector } from 'recoil';
import { ItemProps } from './types';

const todoListState = atom({
  key: 'todoListState',
  default: [] as ItemProps[]
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: ItemProps) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: ItemProps) => !item.isComplete);
      default:
        return list;
    }
  }
});

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList
      .filter((item: ItemProps) => item.isComplete).length;
    let allText = '';
    todoList
      .filter((item: ItemProps) => !item.isComplete)
      .map((item: ItemProps) => (allText = allText + ' ' + item.text));
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText
    };
  }
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState
};
