//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';

// create a component
const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Lütfen notunuzu bu alana yazınız."
            style={{
              flex: 1,
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
            }}
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <View>
          <Button title="Save Changes" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddNote;
