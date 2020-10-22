import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  itemText: {
    marginLeft: 12,
    fontSize: fonts.TITLE,
  },
  input: {
    marginLeft: 12,
    flex: 1,
    fontSize: fonts.TITLE,
    fontFamily: Platform.OS === 'ios' ? 'Roboto' : 'Roboto-Light',
    fontWeight: '300',
  },
  round: {
    height: 25,
    width: 25,
    borderRadius: 15,
    borderWidth: 1,
  },
});
