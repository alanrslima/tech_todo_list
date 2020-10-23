import React from 'react';
import { View } from 'react-native';
import { TEText } from '..';

import styles from './styles';
import { useSelector } from 'react-redux';

function TETaskHeader({ title }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View
        style={[
          styles.content,
          { backgroundColor: theme.colors.onSurfaceDisable },
        ]}>
        <TEText font="bold" style={styles.title}>
          {title}
        </TEText>
      </View>
    </View>
  );
}

export default TETaskHeader;
