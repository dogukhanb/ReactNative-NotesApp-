import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {More, Share, Folder} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Folder style={styles.icon} size="24" color={AppColors.SECONDARY} />
      <Share size="24" color={AppColors.SECONDARY} style={styles.icon} />
      <More size="24" color={AppColors.SECONDARY} style={styles.icon} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default HeaderRight;
