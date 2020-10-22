import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { colors } from '~/styles';
import { useSelector } from 'react-redux';

function TEHeaderButton({ type, color, onPress }) {
  const theme = useSelector((state) => state.theme.theme);

  function getIconName() {
    switch (type) {
      case 'back':
        return 'arrow-left';
      case 'delete':
        return 'trash';
      case 'light-theme':
        return 'sun';
      case 'dark-theme':
        return 'moon';
      default:
        return 'arrow-left';
    }
  }

  const iconName = getIconName();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name={iconName}
        type="feather"
        size={20}
        color={color ? color : theme.colors.onBackgroundPrimary}
      />
    </TouchableOpacity>
  );
}

TEHeaderButton.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.oneOf(['back', 'delete', 'light-theme', 'dark-theme']),
};

TEHeaderButton.defaultProps = {
  onPress: () => {},
  color: undefined,
  type: 'back',
};

export default TEHeaderButton;
