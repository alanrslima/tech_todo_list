import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { colors } from '~/styles';

function TEHeaderButton({ type, color, onPress }) {
  function getIconName() {
    switch (type) {
      case 'back':
        return 'arrow-left';
      case 'delete':
        return 'trash';
      default:
        return 'arrow-left';
    }
  }

  const iconName = getIconName();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={iconName} type="feather" size={20} color={color} />
    </TouchableOpacity>
  );
}

TEHeaderButton.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.oneOf(['back', 'delete']),
};

TEHeaderButton.defaultProps = {
  onPress: () => {},
  color: colors.BLACK,
  type: 'back',
};

export default TEHeaderButton;
