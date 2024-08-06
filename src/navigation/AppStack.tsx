import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../component/CustomDrawer';
import {PrincipalScreen} from '../Screens/Principal/PrincipalScreen';
import {CategoriesScreen} from '../Screens/CategoriesScreen';

const Menu = createDrawerNavigator();

export const AppStack = () => {
  return (
    <Menu.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="PrincipalScreen">
      <Menu.Screen name="PrincipalScreen" component={PrincipalScreen} />
      <Menu.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Menu.Navigator>
  );
};
