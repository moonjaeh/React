import React, { useState } from 'react';

const ArrayRendering = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'HTML' },
    { id: 2, text: 'CSS' },
    { id: 3, text: 'JQuery' },
    { id: 4, text: 'React' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  //const names = ['HTML', 'CSS', 'JQuery', 'React'];

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    //filter 함수를 사용해서 제거 기능 구현
    const nextNames = names.filter((aa) => aa.id !== id);
    setNames(nextNames);
  };

  //배열의 map 함수를 이용하여 새로운 배열 만들기
  const nameList = names.map((bb) => (
    <li onDoubleClick={() => onRemove(bb.id)} key={bb.id}>
      {bb.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default ArrayRendering;
