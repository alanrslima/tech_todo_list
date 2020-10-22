import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  light:
    Platform.OS === 'ios'
      ? { fontFamily: 'Roboto', fontWeight: '300' }
      : { fontFamily: 'Roboto-Light' },
  regular:
    Platform.OS === 'ios'
      ? { fontFamily: 'Roboto', fontWeight: '400' }
      : { fontFamily: 'Roboto-Regular' },
  medium:
    Platform.OS === 'ios'
      ? { fontFamily: 'Roboto', fontWeight: '500' }
      : { fontFamily: 'Roboto-Medium' },
  bold:
    Platform.OS === 'ios'
      ? { fontFamily: 'Roboto', fontWeight: '700' }
      : { fontFamily: 'Roboto-Bold' },
});
