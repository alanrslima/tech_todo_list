import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function NAText(props) {
  const { children, style, font } = props;

  function getFontType() {
    switch (font) {
      case 'light':
        return styles.light;
      case 'regular':
        return styles.regular;
      case 'medium':
        return styles.medium;
      case 'bold':
        return styles.bold;
      default:
        return styles.medium;
    }
  }

  return (
    <Text {...props} style={[style, font && getFontType()]}>
      {children}
    </Text>
  );
}

NAText.propTypes = {
  ...Text.prototype,
  font: PropTypes.oneOf(['light', 'regular', 'medium', 'bold']),
};

NAText.defaultProps = {
  font: 'light',
};

export default NAText;
