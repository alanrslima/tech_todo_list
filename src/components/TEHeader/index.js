import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TEText from '../TEText';
import { useSelector } from 'react-redux';

function TEHeader({ title, headerLeft, headerRight, color, tintColor }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.content}>
        {headerLeft}
        <View style={styles.containerTitle}>
          <TEText
            font="medium"
            numberOfLines={1}
            allowFontScaling={false}
            style={[
              styles.title,
              {
                color: tintColor ? tintColor : theme.colors.onBackgroundPrimary,
              },
            ]}>
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
  tintColor: undefined,
};

export default TEHeader;
