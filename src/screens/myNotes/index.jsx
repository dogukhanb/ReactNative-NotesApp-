//import liraries
import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const MyNotes = ({navigation}) => {
  const {notes} = useContext(MyContext);

  //  const [notes, setNotes] = useState([
  //    {
  //      id: 1,
  //      title: 'Design Engineer',
  //      description: 'Bu birinci notun açıklamasıdır',
  //      date: '12:25 pm',
  //    },
  //    {
  //      id: 2,
  //      title: 'Software Engineer',
  //      description: 'Bu ikinci notun açıklamasıdır',
  //      date: '12:25 pm',
  //    },
  //    {
  //      id: 3,
  //      title: 'Content Writer',
  //      description: 'Bu üçüncü notun açıklamasıdır',
  //      date: '12:25 pm',
  //    },
  //    {
  //      id: 4,
  //     title: 'Data Engineer',
  //      description: 'Bu dördüncü notun açıklamasıdır',
  //      date: '12:25 pm',
  //    },
  //  ]);
  let note1 = {
    id: 5,
    title: 'Backend Developer',
    description: 'Bu beşinci notun açıklamasıdır',
    date: '12:25 pm',
  };
  let note2 = {
    id: 6,
    title: 'Frontend Developer',
    description: 'Bu altıncı notun açıklamasıdır',
    date: '12:25 pm',
  };
  let note3 = {
    id: 7,
    title: 'Mobile Developer',
    description: 'Bu yedinci notun açıklamasıdır',
    date: '12:25 pm',
  };

  // const addNote = item => {
  //   if (item) setNotes([...notes, item]);
  // };
  // const deleteNote = id => {
  //   if (id) {
  //     const updateItems = notes.filter(item => item.id !== id);
  //     setNotes(updateItems);
  //   } else Alert.alert('Böyle bir not bulunamadı...');
  // };
  // const updateNote = (id, item) => {
  //   const updateItems = notes.map(note =>
  //     note.id === id ? {...note, title: item.title} : note,
  //   );
  //   setNotes(updateItems);
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotes([...notes, note2]);
  //   }, 3000);
  // }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              deleteItem={item => deleteNote(item.id)}
              updateItems={item => updateNote(item.id, note2)}
              item={item}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
