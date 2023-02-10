import React from "react";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";

const adState = atom({
  key: "adState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(adState);

    return text.length;
  },
});

function TextInput() {
  const [text, setText] = useRecoilState(adState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function AdCount() {
  const count = useRecoilValue(charCountState);

  return <>Ad Count: {count}</>;
}

export const Ads = (): JSX.Element => (
  <div>
    <TextInput />
    <AdCount />
  </div>
);
