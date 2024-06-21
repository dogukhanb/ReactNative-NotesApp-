//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {
  TextBold,
  TextalignCenter,
  TextalignJustifyleft,
  TextBlock,
  TextUnderline,
  TextalignJustifyright,
} from 'iconsax-react-native';

// create a component
const EditButtons = () => {
  const Buttons = [
    {
      id: 1,
      name: 'bold',
      icon: <TextBold size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 2,
      name: 'bold',
      icon: <TextBlock size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 3,
      name: 'bold',
      icon: <TextUnderline size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 4,
      name: 'bold',
      icon: <TextalignJustifyleft size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 5,
      name: 'bold',
      icon: <TextalignJustifyright size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 6,
      name: 'bold',
      icon: <TextalignCenter size="30" color={AppColors.SECONDARY} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
});

//make this component available to the app
export default EditButtons;
