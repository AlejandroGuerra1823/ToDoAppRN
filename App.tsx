import * as React from 'react';
import {GlobalContextProvider} from './src/context/GlobalContext';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/navigation/AppStack';

function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
