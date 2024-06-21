import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNotesStyles';
import {NOTDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const NoteCard = ({item, changeItem}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTDETAIL)}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble}></View>
      </View>
      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => changeItem(item)}
        style={NoteCardStyle.trashButtonContainer}>
        <Trash size="24" color={AppColors.SECONDARY} variant="Bold" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
