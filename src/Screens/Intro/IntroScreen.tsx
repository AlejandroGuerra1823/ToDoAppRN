import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {t} from '../../i18N/i18next';
import {Styles} from './IntroStyles';

const IntroScreen = () => {
  const [user, setUser] = useState<string>('');

  return (
    <View style={Styles.container}>
      {/* <Text style={Styles.titleText}>{t('userPetitionNameLabel')}</Text> */}
      <TextInput
        value={user}
        onChangeText={value => setUser(value)}
        // placeholder={t('enterNameText')}
        // placeholder={'holaa'}
        style={Styles.textInput}
      />
      {user?.length > 3 && (
        <Icon
          name="checkcircle"
          size={50}
          color="green"
          style={Styles.btnStyle}
        />
      )}
    </View>
  );
};

export default IntroScreen;
