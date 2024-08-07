import * as React from 'react';
import {GlobalContextProvider} from './src/context/GlobalContext';
import {NavigationContainer} from '@react-navigation/native';
import IntroScreen from './src/Screens/Intro/IntroScreen';

function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <IntroScreen />
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
