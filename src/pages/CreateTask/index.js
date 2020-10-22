import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TEHeader, TEHeaderButton, TEButton } from '~/components';
// import Modal from 'react-native-modal';
// import { metrics } from '~/styles';
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from '~/store/ducks/tasks';

function CreateTask({ navigation }) {
  const theme = useSelector((state) => state.theme.theme);
  const loading = useSelector((state) => state.tasks.createTaskLoading);
  const error = useSelector((state) => state.tasks.createTaskError);

  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  async function saveTask() {
    await dispatch(createTask({ name, description }));
    if (!error) {
      navigation.goBack();
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <TEHeader
        headerLeft={<TEHeaderButton type="back" onPress={navigation.goBack} />}
      />
      <KeyboardAvoidingView
        style={styles.avoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <ScrollView>
          <View
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => setName(txt)}
              value={name}
              multiline
              autoFocus
              maxLength={240}
              placeholder="Nome da tarefa"
            />
          </View>

          <View
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <Icon name="align-left" size={25} />
            <TextInput
              style={styles.input}
              onChangeText={(txt) => setDescription(txt)}
              value={description}
              multiline
              placeholder="Incluir descrição"
            />
          </View>
        </ScrollView>
        <View style={styles.containerButton}>
          <TEButton
            text="SALVAR"
            loading={loading}
            disabled={!name.length}
            onPress={saveTask}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default CreateTask;
