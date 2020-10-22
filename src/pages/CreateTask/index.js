import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { TEHeader, TEHeaderButton } from '~/components';

function CreateTask({ navigation }) {
  return (
    <View style={styles.container}>
      <TEHeader
        title="Create"
        headerLeft={<TEHeaderButton onPress={navigation.goBack} />}
      />
      <View style={styles.content} />
    </View>
  );
}

export default CreateTask;
