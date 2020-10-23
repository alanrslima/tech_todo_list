import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  headerButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.WHITE,
    padding: 16,
    borderRadius: 10,
  },
  containerButton: {
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.HEADLINE,
  },
  description: {
    textAlign: 'center',
    fontSize: fonts.TITLE,
    marginVertical: 10,
  },
});
