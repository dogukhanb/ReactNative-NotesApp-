import React, {useState} from 'react';
import MyContext from '.';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('İkici Sayfa');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'Bu birinci notun açıklamasıdır',
      date: '12:15 pm',
      read: false,
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Bu ikinci notun açıklamasıdır',
      date: '12:25 pm',
      read: false,
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'Bu üçüncü notun açıklamasıdır',
      date: '12:35 pm',
      read: false,
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Bu dördüncü notun açıklamasıdır',
      date: '12:45 pm',
      read: false,
    },
  ]);

  const changeCount = () => {
    setCount(count + 1);
  };
  const changeMessage = text => {
    setMessage(text);
  };
  const addNote = item => {
    if (item) setNotes([...notes, item]);
    Alert.alert('Notunuz başarılı bir şekilde kaydedildi.');
  };
  const deleteNote = id => {
    if (id) {
      const updateItems = notes.filter(item => item.id !== id);
      setNotes(updateItems);
      Alert.alert('Notunuz başarılı bir şekilde silindi.');
    } else Alert.alert('Böyle bir not bulunamadı...');
  };
  const updateNote = (id, item) => {
    const updateItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: '13:00',
          }
        : note,
    );
    setNotes(updateItems);
    Alert.alert('Notunuz başarılı bir şekilde güncellendi.');
  };

  return (
    <MyContext.Provider
      value={{
        count,
        changeCount,
        message,
        changeMessage,
        notes,
        addNote,
        updateNote,
        deleteNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};
export default Provider;
