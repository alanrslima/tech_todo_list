import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { TEText } from '..';

import styles from './styles';
import { colors } from '~/styles';

function TELoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator collapsable color={colors.BLUE} size="large" />
    </View>
  );
}

export default TELoading;
