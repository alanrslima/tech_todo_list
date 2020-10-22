import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

const metrics = {
  SCREEN_WIDTH: width < height ? width : height,
  SCREEN_HEIGHT: width < height ? height : width,
  HEADER_HEIGHT: Platform.OS === 'ios' ? getStatusBarHeight() + 50 : 50,
  HEADER_BUTTON: 50,
};

export default metrics;
