import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import mock from './mock';
import { TEHeader, TEFloatButton, TETask, TETaskHeader } from '~/components';

function List({ navigation }) {
  const todoList = mock;

  return (
    <View style={styles.container}>
      <TEHeader title="Tasks" />
      <FlatList
        style={styles.list}
        keyExtractor={(item, index) => `${item.id}${index}`}
        data={todoList}
        renderItem={({ item }) => (
          <TETask
            onPress={() => navigation.navigate('Detail', { task: item })}
            name={item.name}
            concluded={item.concluded}
          />
        )}
      />

      <TEFloatButton onPress={() => navigation.navigate('CreatTask')} />
    </View>
  );
}

export default List;
