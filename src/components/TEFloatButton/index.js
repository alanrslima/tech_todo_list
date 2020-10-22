import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import styles from './styles';
import PropTypes from 'prop-types';

function TEFloatButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="plus" size={25} color={colors.WHITE} />
    </TouchableOpacity>
  );
}

TEFloatButton.propTypes = {
  onPress: PropTypes.func,
};

TEFloatButton.defaultProps = {
  onPress: () => {},
};

export default TEFloatButton;
