import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {
  TEHeader,
  TEHeaderButton,
  TEText,
  TEAlert,
  TEButton,
} from '~/components';
import { colors, fonts } from '~/styles';
import { deleteTask } from '~/store/ducks/tasks';

function Detail({ navigation, route }) {
  const theme = useSelector((state) => state.theme.theme);

  const { task } = route.params;
  const dispatch = useDispatch();

  const [description, setDescription] = useState(task.description);
  const [name, setName] = useState(task.name);
  const [showAlert, setShowAlert] = useState(false);

  async function removeTask() {
    setShowAlert(false);
    await dispatch(deleteTask(task.id));
    navigation.goBack();
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TEHeader
        headerLeft={<TEHeaderButton type="back" onPress={navigation.goBack} />}
      />
      <KeyboardAvoidingView
        style={[styles.content, { backgroundColor: theme.colors.surface }]}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <ScrollView>
          <View
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <View
              style={[
                styles.round,
                { borderColor: theme.colors.onSurfaceSecundary },
              ]}
            />
            <TextInput
              style={[
                styles.input,
                {
                  color: theme.colors.onSurfacePrimary,
                  fontSize: fonts.HEADLINE,
                },
              ]}
              onChangeText={(txt) => setName(txt)}
              value={name}
              multiline
              maxLength={240}
              placeholderTextColor={theme.colors.onSurfaceSecundary}
              placeholder="Digite o nome da tarefa"
            />
          </View>
          <TouchableOpacity
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <IconAwesome
              name={task.favorite ? 'star' : 'star-o'}
              size={25}
              color={
                task.favorite ? colors.YELLOW : theme.colors.onSurfacePrimary
              }
            />
            <TEText
              style={[
                styles.itemText,
                { color: theme.colors.onSurfacePrimary },
              ]}>
              {task.favorite ? 'Desfavoritar tarefa' : 'Favoritar tarefa'}
            </TEText>
          </TouchableOpacity>
          <View
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <Icon
              name="align-left"
              size={25}
              color={theme.colors.onSurfacePrimary}
            />
            <TextInput
              style={[styles.input, { color: theme.colors.onSurfacePrimary }]}
              onChangeText={(txt) => setDescription(txt)}
              value={description}
              multiline
              placeholder="Incluir descrição"
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowAlert(true)}
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <Icon name="trash-2" size={25} color={colors.RED} />
            <TEText style={[styles.itemText, { color: colors.RED }]}>
              Apagar tarefa
            </TEText>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.containerButton}>
          <TEButton
            text="SALVAR"
            // loading={loading}
            disabled={!name.length}
            type="secundary"
            // onPress={saveTask}
          />
        </View>
      </KeyboardAvoidingView>

      <TEAlert
        title="Apagar tarefa"
        description="Você tem certeza que deseja apagar esta tarefa?"
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        buttons={[
          { id: 'no', text: 'NÃO', onPress: () => setShowAlert(false) },
          { id: 'yes', text: 'SIM', onPress: removeTask, type: 'secundary' },
        ]}
      />
    </View>
  );
}

export default Detail;
