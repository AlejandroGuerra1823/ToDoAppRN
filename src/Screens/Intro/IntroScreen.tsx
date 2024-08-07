import React from 'react';
import {StatusBar, Text, TextInput, View} from 'react-native';
import {t} from '../../i18N/i18next';
import {AppStack} from '../../navigation/AppStack';
import {Styles} from './IntroStyles';

const IntroScreen = () => {
  return (
    <>
      <StatusBar />
      <View style={Styles.container}>
        <Text>{t('UserPetitionNameLabel')}</Text>
        <TextInput />
      </View>
    </>
  );
};

export default IntroScreen;
