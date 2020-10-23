import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { TEText } from '..';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function TEContentAlert({ title, description, button, type, onPressButton }) {
  const theme = useSelector((state) => state.theme.theme);

  function getIcon() {
    switch (type) {
      case 'empty':
        return 'folder-open';
      case 'error':
        return 'meh-o';
      case 'warning':
        return 'warning';
      default:
        return 'empty';
    }
  }

  return (
    <View style={styles.container}>
      <Icon
        name={getIcon()}
        color={theme.colors.onBackgroundSecundary}
        size={80}
      />
      <TEText
        font="bold"
        style={[styles.title, { color: theme.colors.onBackgroundPrimary }]}>
        {title}
      </TEText>
      <TEText
        style={[
          styles.description,
          { color: theme.colors.onBackgroundSecundary },
        ]}>
        {description}
      </TEText>
      <TouchableOpacity onPress={onPressButton}>
        <TEText font="bold" style={styles.button}>
          {button}
        </TEText>
      </TouchableOpacity>
    </View>
  );
}

TEContentAlert.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
  type: PropTypes.oneOf(['empty', 'error', 'warning']),
  onPressButton: PropTypes.func,
};

TEContentAlert.defaultProps = {
  title: '',
  description: '',
  button: '',
  type: 'empty',
  onPressButton: () => {},
};

export default TEContentAlert;
