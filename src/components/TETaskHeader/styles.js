import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: colors.GREY_LIGHT,
  },
  title: {
    fontSize: fonts.DESCRIPTION,
    color: colors.BLUE,
  },
});
