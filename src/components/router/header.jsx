//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenHeight} from '../../utils/constans';
import {MYNOTES} from '../../utils/routes';
import {AppColors} from '../../theme/colors';
import {HambergerMenu, SearchNormal, More} from 'iconsax-react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 5,
            flex: 1,
            justifyContent: 'center',
          }}>
          <HambergerMenu size="24" color={AppColors.SECONDARY} />
        </View>
        <View
          style={{
            padding: 15,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <SearchNormal
            size="24"
            color={AppColors.SECONDARY}
            style={{marginRight: 10}}
          />
          <More size="24" color={AppColors.SECONDARY} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    padding: 10,
  },
});

//make this component available to the app
export default Header;
