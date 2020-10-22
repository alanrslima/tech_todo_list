import React from 'react';
import { View } from 'react-native';
import { TEText } from '..';

import styles from './styles';

function TETaskHeader({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TEText font="bold" style={styles.title}>
          Seg, 3 de out
        </TEText>
      </View>
    </View>
  );
}

export default TETaskHeader;
