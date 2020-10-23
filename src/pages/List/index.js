import React, { useEffect, useState } from 'react';
import { View, RefreshControl, SectionList } from 'react-native';

import styles from './styles';
import {
  TEHeader,
  TEFloatButton,
  TETask,
  TELoading,
  TEAlert,
  TEHeaderButton,
  TETaskHeader,
  TEContentAlert,
} from '~/components';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, editTask, deleteTask } from '~/store/ducks/tasks';
import { Storage, keys } from '~/storage';
import { selectDarkTheme, selectLightTheme } from '~/store/ducks/theme';

function List({ navigation }) {
  const theme = useSelector((state) => state.theme.theme);

  const tasks = useSelector((state) => state.tasks.tasks);
  const tasksLoading = useSelector((state) => state.tasks.tasksLoading);
  const tasksEmpty = useSelector((state) => state.tasks.tasksEmpty);
  const tasksRefresh = useSelector((state) => state.tasks.tasksRefresh);
  const tasksError = useSelector((state) => state.tasks.tasksError);
  const dispatch = useDispatch();

  const [editAlert, setEditAlert] = useState({
    visible: false,
    description: '',
    buttons: [],
  });

  useEffect(() => {
    getData();
    checkTheme();
  }, []);

  async function checkTheme() {
    const currentTheme = await Storage.getStorageString(keys.CURRENT_THEME);
    if (!currentTheme) {
      return;
    }
    if (currentTheme === 'light') {
      dispatch(selectLightTheme());
    } else if (currentTheme === 'dark') {
      dispatch(selectDarkTheme());
    }
  }

  function getData() {
    dispatch(getTasks());
  }

  function closeEditAlert() {
    setEditAlert({ visible: false, buttons: [], description: '' });
  }

  function onLongPressTask(task) {
    setEditAlert({
      visible: true,
      description: task.name,
      buttons: [
        {
          id: '1',
          text: task.concluded ? 'Deixar em aberto' : 'Marcar como concluído',
          onPress: () => {
            closeEditAlert();
            dispatch(editTask({ ...task, concluded: !task.concluded }));
          },
        },
        {
          id: '2',
          text: task.favorite ? 'Desfavoritar' : 'Favoritar',
          onPress: () => {
            closeEditAlert();
            dispatch(editTask({ ...task, favorite: !task.favorite }));
          },
        },
        {
          id: '3',
          type: 'secundary',
          text: 'Apagar',
          onPress: () => {
            closeEditAlert();
            dispatch(deleteTask(task.id));
          },
        },
      ],
    });
  }

  function renderContent() {
    if (tasksLoading) {
      return <TELoading />;
    }
    if (tasksError) {
      return (
        <TEContentAlert
          title="Ops..."
          description="Algo inesperado aconteceu, tente novamente mais tarde!"
          button="Tentar novamente"
          type="error"
          onPressButton={() => dispatch(getTasks())}
        />
      );
    }
    if (tasksEmpty) {
      return (
        <TEContentAlert
          type="empty"
          title="Nada por aqui..."
          description="Parece que você ainda não criou nenhuma tarefa"
          button="+ Crie uma agora"
          onPressButton={() => navigation.navigate('CreateTask')}
        />
      );
    }
    return (
      <Animatable.View
        style={styles.container}
        animation="fadeInUpBig"
        iterationCount={1}>
        <SectionList
          sections={tasks}
          refreshControl={
            <RefreshControl
              refreshing={tasksRefresh}
              tintColor={theme.colors.onSurfacePrimary}
              onRefresh={() => dispatch(getTasks(true))}
            />
          }
          style={[styles.list, { backgroundColor: theme.colors.surface }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <TETask
              onPress={() => navigation.navigate('Detail', { task: item })}
              name={item.name}
              onPressRadioButton={() =>
                dispatch(editTask({ ...item, concluded: !item.concluded }))
              }
              onPressFavorite={() => {
                dispatch(editTask({ ...item, favorite: !item.favorite }));
              }}
              onLongPress={() => onLongPressTask(item)}
              favorite={item.favorite}
              concluded={item.concluded}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <TETaskHeader title={title} />
            // <Text style={styles.header}>{title}</Text>
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
        title="Tarefas"
      />
      {renderContent()}
      <TEFloatButton onPress={() => navigation.navigate('CreateTask')} />
      <TEAlert
        visible={editAlert.visible}
        title="Edição de tarefa"
        onClose={closeEditAlert}
        description={editAlert.description}
        buttons={editAlert.buttons}
      />
    </View>
  );
}

export default List;
