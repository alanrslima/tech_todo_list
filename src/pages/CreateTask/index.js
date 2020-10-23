import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TEHeader, TEHeaderButton, TEButton, TEAlert } from '~/components';
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
  const [showAlertError, setShowAlertError] = useState(false);

  useEffect(() => {
    setShowAlertError(error);
  }, [error]);

  async function saveTask() {
    await dispatch(
      createTask({ name, description }, (err) => {
        if (!err) {
          navigation.goBack();
        }
      }),
    );
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
              style={[styles.input, { color: theme.colors.onSurfacePrimary }]}
              onChangeText={(txt) => setName(txt)}
              value={name}
              multiline
              autoFocus
              maxLength={240}
              placeholderTextColor={theme.colors.onSurfaceSecundary}
              placeholder="Nome da tarefa"
              keyboardAppearance={theme.type}
            />
          </View>

          <View
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <Icon
              name="align-left"
              color={theme.colors.onSurfacePrimary}
              size={25}
            />
            <TextInput
              style={[styles.input, { color: theme.colors.onSurfacePrimary }]}
              onChangeText={(txt) => setDescription(txt)}
              value={description}
              multiline
              placeholder="Incluir descrição"
              keyboardAppearance={theme.type}
              placeholderTextColor={theme.colors.onSurfaceSecundary}
            />
          </View>
        </ScrollView>
        <View style={styles.containerButton}>
          <TEButton
            text="SALVAR"
            loading={loading}
            type="secundary"
            disabled={!name.length}
            onPress={saveTask}
          />
        </View>
      </KeyboardAvoidingView>
      <TEAlert
        title="Ops"
        visible={showAlertError ? true : false}
        onClose={() => setShowAlertError(false)}
        description="Algo inesperado aconteceu, tente novamente mais tarde!"
        buttons={[
          { id: 'ok', text: 'Ok', onPress: () => setShowAlertError(false) },
        ]}
      />
    </View>
  );
}

export default CreateTask;
