import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Divider} from 'react-native-paper';

export const CustomDrawer = props => {
  return (
    <View style={{flex: 1, margin: 5}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          borderRadius: 7,
        }}>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Crear nueva nota +
          </Text>
        </TouchableOpacity>
        <Divider style={Styles.line} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Hola alejo</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
  },
  line: {
    width: '90%',
    marginTop: '5%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
});
