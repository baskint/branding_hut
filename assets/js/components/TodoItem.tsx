import React from 'react';
import { useRecoilState } from 'recoil';
import { Box, Button } from '@mui/material';
import { todoListState } from './todoListState';
import { ItemProps } from './types';

const replaceItemAtIndex = (
  arr: ItemProps[],
  index: number, 
  newValue: ItemProps
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      p: 1,
      m: 1,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </Box>
  );
};

export default TodoItem;
