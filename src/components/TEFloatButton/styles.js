import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
});
