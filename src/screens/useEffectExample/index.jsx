//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import {SECONDSSCREEN} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const UseEffectExample = ({navigation}) => {
  const {count, changeCount} = useContext(MyContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.count}>{count}</Text>
          <Text>Birinci Sayfa</Text>
        </View>
        <View style={{padding: 5}}>
          <Button
            onPress={() => navigation.navigate(SECONDSSCREEN, {count: count})}
            title="Sayfa Git"
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  count: {
    fontSize: 100,
    fontFamily: 'bold',
    color: AppColors.PRIMARY,
  },
});

//make this component available to the app
export default UseEffectExample;
