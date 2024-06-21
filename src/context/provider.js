import React, {useState} from 'react';
import MyContext from '.';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('İkici Sayfa');

  const changeCount = () => {
    setCount(count + 1);
  };
  const changeMessage = text => {
    setMessage(text);
  };
  return (
    <MyContext.Provider value={{count, changeCount, message, changeMessage}}>
      {children}
    </MyContext.Provider>
  );
};
export default Provider;
