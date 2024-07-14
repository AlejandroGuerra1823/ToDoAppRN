import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PrincipalScreenStyles';

export const PrincipalScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('CategoriesScreen')}>
        <Text> tocame</Text>
      </TouchableOpacity>
    </View>
  );
};
