import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  containerButton: {
    margin: 16,
  },
  avoiding: {
    flex: 1,
  },
});
