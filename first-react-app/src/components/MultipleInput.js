import React, { useState } from 'react';

const MultipleInput = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  //form이 객체여서 비구조화할당을 사용하여 username과 message로 분리
  const { username, message } = form;

  //onChage 이벤트에 할당될 함수 정의
  const handleChange = (e) => {
    const nextForm = {
      ...form,
      //username: '',
      //message: '',
      [e.target.name]: e.target.value,
      //username: 'gogi'
    };
    setForm(nextForm);
  };
  /* input이 늘어나면 onChange 이벤트에 할당할 함수를 계속 생성해야됨
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  */
  const handleClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={handleChange}
        value={username}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        onChange={handleChange}
        value={message}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default MultipleInput;
