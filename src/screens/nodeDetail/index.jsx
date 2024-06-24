//import liraries
import React, {useState, useEffect, useContext} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';
import MyContext from '../../context';

// create a component
const NoteDetail = ({route}) => {
  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const {updateNote} = useContext(MyContext);
  const {note} = route?.params;

  const changeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectStyle(styles.bold);
        break;
      case 'italic':
        setSelectStyle(styles.italic);
        break;
      case 'textUnderline':
        setSelectStyle(styles.textUnderline);
        break;
      case 'left':
        setSelectStyle(styles.left);
        break;
      case 'right':
        setSelectStyle(styles.right);
        break;

      case 'center':
        setSelectStyle(styles.center);
        break;
    }
  };
  useEffect(() => {
    updateNote(note.id, note);
    return () => {
      updateNote(note.id, note);
    };
  }, []);
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyleText(value)} />
        </View>
        <View style={{backgroundColor: AppColors.WHITE, flex: 1}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Başlık</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Not</Text>
            <Text style={selectStyle}>{note.description}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    textDecorationLine: 'none',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  normal: {},
});

export default NoteDetail;
