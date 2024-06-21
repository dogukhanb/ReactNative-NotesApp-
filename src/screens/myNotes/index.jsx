//import liraries
import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';

// create a component
const MyNotes = ({navigation}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'Bu birinci notun açıklamasıdır',
      date: '12:25 pm',
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Bu ikinci notun açıklamasıdır',
      date: '12:25 pm',
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'Bu üçüncü notun açıklamasıdır',
      date: '12:25 pm',
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'Bu dördüncü notun açıklamasıdır',
      date: '12:25 pm',
    },
  ]);
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

  const addNote = item => {
    if (item) setNotes([...notes, item]);
  };
  const deleteNote = id => {
    const updateItems = notes.filter(item => item.id !== id);
    setNotes(updateItems);
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              changeItem={item => console.log(item)}
              item={item}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => deleteNote(2)} //onPress={() => navigation.navigate(ADDNOTE)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
