import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '~/styles';
import TEText from '../TEText';

function TEHeader({ title, headerLeft, headerRight, color, tintColor }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.content}>
        {headerLeft}
        <View style={styles.containerTitle}>
          <TEText
            font="medium"
            numberOfLines={1}
            allowFontScaling={false}
            style={[styles.title, { color: tintColor }]}>
            {title}
          </TEText>
        </View>
        <View style={styles.offset} />
        {headerRight}
      </View>
    </View>
  );
}

TEHeader.propTypes = {
  title: PropTypes.string,
  headerLeft: PropTypes.element,
  headerRight: PropTypes.element,
  color: PropTypes.string,
  tintColor: PropTypes.string,
};

TEHeader.defaultProps = {
  title: '',
  headerLeft: undefined,
  headerRight: undefined,
  color: 'transparent',
  tintColor: colors.BLACK,
};

export default TEHeader;
