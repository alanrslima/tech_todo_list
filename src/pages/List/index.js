import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import mock from './mock';
import {
  TEHeader,
  TEFloatButton,
  TETask,
  TELoading,
  TEAlert,
} from '~/components';
import * as Animatable from 'react-native-animatable';

function List({ navigation }) {
  const todoList = mock;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  function renderContent() {
    if (loading) {
      return <TELoading />;
    }
    return (
      <Animatable.View
        style={styles.container}
        animation="fadeInUpBig"
        iterationCount={1}>
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
      </Animatable.View>
    );
  }

  return (
    <View style={styles.container}>
      <TEHeader title="Tasks" />
      {renderContent()}
      <TEFloatButton onPress={() => navigation.navigate('CreateTask')} />
      <TEAlert
        title="Edição de tarefa"
        // buttons={[
        //   {id: 'concluded', }
        // ]}
      />
    </View>
  );
}

export default List;
