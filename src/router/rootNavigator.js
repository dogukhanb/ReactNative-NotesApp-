
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  MYNOTES,
  NOTDETAIL,
  SECONDSSCREEN,
  STATEXAMPLE,
  USEEFFECTEXAMPLE,
} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import NoteDetail from '../screens/nodeDetail';
import AddNote from '../screens/addNote';
import {AppColors} from '../theme/colors';
import StateExample from '../screens/stateExaple';
import UseEffectExample from '../screens/useEffectExample';
import SecondScreen from '../screens/useEffectExample/secondScreen';
import HeaderRight from '../components/ui/headerRight';

const Stack = createNativeStackNavigator();

function RootNavigatoor() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.SECONDARY,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={USEEFFECTEXAMPLE}
        component={UseEffectExample}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={SECONDSSCREEN}
        component={SecondScreen}
      />
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTDETAIL} component={NoteDetail} />
      <Stack.Screen
        options={{headerShown: true}}
        name={STATEXAMPLE}
        component={StateExample}
      />
    </Stack.Navigator>
  );
}

export default RootNavigatoor;
