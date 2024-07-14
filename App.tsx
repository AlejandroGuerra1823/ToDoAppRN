import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CategoriesScreen} from './src/Screens/CategoriesScreen';
import {PrincipalScreen} from './src/Screens/Principal/PrincipalScreen';
import {GlobalContextProvider} from './src/Context/GlobalContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PrincipalScreen">
          <Stack.Screen
            name="PrincipalScreen"
            component={PrincipalScreen}
            options={{
              title: 'Notes to do!',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{title: 'Categories to choose!'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

export default App;
