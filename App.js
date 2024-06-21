import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigatoor from './src/router/rootNavigator';
import Provider from './src/context/provider';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigatoor />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
