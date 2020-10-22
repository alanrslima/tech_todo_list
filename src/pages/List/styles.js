import { StyleSheet } from 'react-native';
import { colors } from '~/styles';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE_LIGHT,
  },
  list: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
