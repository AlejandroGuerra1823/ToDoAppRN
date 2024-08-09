import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const {width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    marginTop: 10,
    borderColor: colors.primary,
    width: width - 50,
    height: 35,
    borderRadius: 6,
    paddingLeft: 15,
    fontSize: 20,
    textAlignVertical: 'bottom',
    paddingBottom: 2,
    marginBottom: 15,
  },
  titleText: {opacity: 0.5},
  btnStyle: {padding: 15, elevation: 7},
});
