//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';

// create a component
const StateExample = () => {
  const [count, setCount] = useState(0);
  const setCountStyle = () => {
    if (count >= 10) return styles.countSucces;
    else if (count < 0) return styles.counteEror;
    else return styles.count;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.countWrapper}>
          <Text style={setCountStyle()}>{count}</Text>
          {count < 0 ? (
            <Text style={styles.infoTextEror}>
              Hata:Sayı 0'dan küçük olamaz.
            </Text>
          ) : (
            <Text style={styles.infoTextSucces}>
              Başarılı:Sayı 0'dan büyük.
            </Text>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => setCount(count + 1)}
            title="Artır"
            style={count >= 10 ? styles.buttonSuccces : styles.button}
          />
          <Button
            onPress={() => setCount(count - 1)}
            title="Azalt"
            style={count < 0 ? styles.buttonEror : styles.button}
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
    backgroundColor: '#FFFF',
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  countSucces: {
    fontSize: 100,
    color: AppColors.GREEN,
    fontWeight: 'bold',
  },
  infoTextEror: {
    fontSize: 24,
    color: AppColors.RED,
    fontWeight: '500',
  },
  infoTextSucces: {
    fontSize: 24,
    color: AppColors.GREEN,
    fontWeight: '500',
  },
  counteEror: {
    fontSize: 100,
    color: AppColors.RED,
    fontWeight: 'bold',
  },
  countWrapper: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: AppColors.WHITE,
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonSuccces: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.GREEN,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonEror: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.RED,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
});

//make this component available to the app
export default StateExample;
