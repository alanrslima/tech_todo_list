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
  TEText,
  TEHeaderButton,
} from '~/components';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '~/store/ducks/tasks';
import { selectDarkTheme, selectLightTheme } from '~/store/ducks/theme';

function List({ navigation }) {
  const theme = useSelector((state) => state.theme.theme);

  const tasks = useSelector((state) => state.tasks.tasks);
  const tasksLoading = useSelector((state) => state.tasks.tasksLoading);
  const tasksError = useSelector((state) => state.tasks.tasksError);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    dispatch(getTasks());
  }

  function renderContent() {
    if (tasksLoading) {
      return <TELoading />;
    }
    if (tasksError) {
      return <TEText>Tela de error</TEText>;
    }
    return (
      <Animatable.View
        style={styles.container}
        animation="fadeInUpBig"
        iterationCount={1}>
        <FlatList
          style={[styles.list, { backgroundColor: theme.colors.surface }]}
          keyExtractor={(item, index) => `${item.id}${index}`}
          data={tasks}
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
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TEHeader
        headerLeft={
          <TEHeaderButton
            type={theme.type === 'light' ? 'dark-theme' : 'light-theme'}
            onPress={
              theme.type === 'light'
                ? () => dispatch(selectDarkTheme())
                : () => dispatch(selectLightTheme())
            }
          />
        }
        title="Tasks"
      />
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
