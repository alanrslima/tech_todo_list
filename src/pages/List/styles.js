import { StyleSheet } from 'react-native';
import { colors } from '~/styles';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
