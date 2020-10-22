import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  SCREEN_WIDTH: width < height ? width : height,
  SCREEN_HEIGHT: width < height ? height : width,
};

export default metrics;
