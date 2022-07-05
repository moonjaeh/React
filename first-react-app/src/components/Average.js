import React, { useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균 값 계산중...');
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  return (
    <div>
      <input value={number} onChange={handleChange}></input>
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값: {getAverage(list)}</b>
      </div>
    </div>
  );
};

export default Average;
