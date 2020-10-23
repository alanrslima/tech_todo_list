import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { TEText } from '..';
import PropTypes from 'prop-types';
import styles from './styles';
import { useSelector } from 'react-redux';

function TEButton({ text, onPress, type, disabled, loading }) {
  const theme = useSelector((state) => state.theme.theme);

  function checkDisabled() {
    if (disabled) {
      return true;
    }
    if (loading) {
      return true;
    }
    return false;
  }

  function checkStyle() {
    const statusDisabled = checkDisabled();
    if (type === 'primary') {
      return {
        button: [
          styles.container,
          {
            backgroundColor: statusDisabled
              ? theme.colors.onSurfaceDisable
              : theme.colors.button,
          },
        ],
        text: {
          color: statusDisabled
            ? theme.colors.onButtonDisable
            : theme.colors.onButtonPrimary,
        },
      };
    }
    if (type === 'secundary') {
      return {
        button: [
          styles.container,
          {
            borderWidth: 1,
            borderColor: statusDisabled
              ? theme.colors.onButtonDisable
              : theme.colors.onButtonSecundary,
          },
        ],
        text: {
          color: statusDisabled
            ? theme.colors.onButtonDisable
            : theme.colors.onButtonSecundary,
        },
      };
    }
    return {};
  }

  return (
    <TouchableOpacity
      disabled={checkDisabled()}
      style={checkStyle().button}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <TEText style={checkStyle().text} font="bold">
          {text}
        </TEText>
      )}
    </TouchableOpacity>
  );
}

TEButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secundary']),
};

TEButton.defaultProps = {
  text: '',
  type: 'primary',
};

export default TEButton;
