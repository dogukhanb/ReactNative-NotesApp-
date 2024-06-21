//import liraries
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {screenWidh} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="50" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: screenWidh * 0.2,
    height: screenWidh * 0.2,
  },
});

//make this component available to the app
export default FloatActionButton;
