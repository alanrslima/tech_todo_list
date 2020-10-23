import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  round: {
    height: 25,
    width: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.GREY,
    marginRight: 10,
  },
  roundConcluded: {
    backgroundColor: colors.BLUE,
    borderWidth: 0,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: fonts.TITLE,
    color: colors.BLACK,
  },
  titleConcluded: {
    textDecorationLine: 'line-through',
    color: colors.GREY,
  },
});
