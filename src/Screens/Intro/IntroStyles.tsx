import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
