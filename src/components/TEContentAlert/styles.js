import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: fonts.HEADLINE,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    fontSize: fonts.TITLE,
    textAlign: 'center',
  },
  button: {
    fontSize: fonts.TITLE,
    marginTop: 20,
    textAlign: 'center',
    color: colors.BLUE,
  },
});
