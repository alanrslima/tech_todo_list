import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import FloatButton from '../../components/FloatButton';
import Task from '../../components/Task';
import mock from './mock';

function List() {
  const todoList = mock;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => `${item.id}${index}`}
        data={todoList}
        renderItem={({ item }) => (
          <Task name={item.name} concluded={item.concluded} />
        )}
      />
      <FloatButton />
    </View>
  );
}

export default List;
