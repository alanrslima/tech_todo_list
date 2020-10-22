import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { metrics, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    height: metrics.HEADER_HEIGHT,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTitle: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.HEADER_BUTTON * 2,
  },
  title: {
    fontSize: fonts.TITLE,
    fontWeight: 'bold',
  },
  offset: {
    flex: 1,
  },
});
