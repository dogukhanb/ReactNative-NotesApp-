//import liraries
import React, {useContext, useState} from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);
  const navigation = useNavigation();
  const {note} = route?.params;
  const {type} = route?.params;
  const [description, setDescription] = useState(note?.description);
  const [title, setTitle] = useState(note?.title);
  const [titleRequared, setTitleRequared] = useState(false);
  const [descriptionRequared, setDescriptionRequared] = useState(false);

  const saveNote = () => {
    if (!title) setTitleRequared(true);
    if (!description) setDescriptionRequared(true);
    if (title && description) {
      setTitleRequared(false);
      setDescriptionRequared(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: '12:00',
      };
      addNote(form);
      navigation.goBack();
    }
  };

  const onChangeNote = () => {
    if (!title) setTitleRequared(true);
    if (!description) setDescriptionRequared(true);
    if (title && description) {
      setTitleRequared(false);
      setDescriptionRequared(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '12:00',
        read: true,
      };
      updateNote(note.id, form);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontWeight: 500, fontSize: 16}}>Başlık</Text>
          <TextInput
            placeholder="Lütfen başlık bilgisini bu alana yazınız."
            value={title}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 50,
            }}
            onChangeText={text => setTitle(text)}
          />
          {titleRequared && (
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              Lütfen başlık alanını doldurunuz
            </Text>
          )}
          <Text style={{fontWeight: 500, fontSize: 16}}>Açıklama</Text>
          <TextInput
            placeholder="Lütfen notunuzu bu alana yazınız."
            value={description}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 90,
            }}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequared && (
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginVertical: 10,
                color: AppColors.RED,
              }}>
              Lütfen açıklama alanını doldurunuz
            </Text>
          )}
        </View>
        <Button
          onPress={type == 'update' ? onChangeNote : saveNote}
          title={type == 'update' ? 'Güncelle' : 'Kaydet'}
        />
      </View>
    </SafeAreaView>
  );
};
export default AddNote;
