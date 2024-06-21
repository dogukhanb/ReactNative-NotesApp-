//import liraries
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import MyContext from '../../context';

// create a component
const SecondScreen = ({route}) => {
  const {count, changeCount} = useContext(MyContext);
  const {message, changeMessage} = useContext(MyContext);
  //Mount (Sayfa Yüklendi)=>first // ComponentDidMount
  //UnMount (Sayfa Çıkış Yapılda)=>second // ComponentWillUnmount
  //Update (Sayfa Güncellendiğinde)=>third //ComponentDidUpdate
  useEffect(() => {
    // console.log('Mount (Sayfa Yüklendiğindiğinde Gerçekleşecek İşlemler.)');
    setTimeout(() => {
      changeMessage('Sayfa Yüklendiğindiğinde Gerçekleşecek İşlemler.');
    }, 3000);
    return () => {
      changeMessage(
        'UnMount (Mount (Sayfadan Çıkış Yapıldığında Gerçekleşecek İşlemler.)',
      );
      // console.log(
      //   'UnMount (Mount (Sayfadan Çıkış Yapıldığında Gerçekleşecek İşlemler.)',
      // );
    };
  }, []);
  useEffect(() => {
    if (count !== 0) changeMessage('Sayfa Güncellendi');
  }, [count]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.count}>{count}</Text>
          <Text style={styles.text}>{message}</Text>
        </View>
        <View style={{padding: 5}}>
          <Button
            onPress={() => changeCount()}
            title="Artır"
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
    backgroundColor: '#ffff',
  },
  count: {
    fontSize: 100,
    fontFamily: 'bold',
    color: AppColors.PRIMARY,
  },
  text: {
    fontFamily: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
});

//make this component available to the app
export default SecondScreen;
