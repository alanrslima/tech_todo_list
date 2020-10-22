import { StyleSheet } from 'react-native';
import { fonts, colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.TITLE,
    color: colors.BLUE,
    marginTop: 10,
  },
});
