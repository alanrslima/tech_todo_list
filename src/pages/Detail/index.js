import React, { useState, useCallback, useEffect } from 'react';
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
import { TEHeader, TEHeaderButton, TEText, TEAlert } from '~/components';
import { colors, fonts } from '~/styles';
import { deleteTask, editTask } from '~/store/ducks/tasks';
import { debounce } from 'lodash';

function Detail({ navigation, route }) {
  const theme = useSelector((state) => state.theme.theme);

  let { task } = route.params;
  const dispatch = useDispatch();

  const [description, setDescription] = useState(task.description);
  const [name, setName] = useState(task.name);
  const [concluded, setConcluded] = useState(task.concluded);
  const [favorite, setFavorite] = useState(task.favorite);

  const [showAlert, setShowAlert] = useState(false);

  const debounceLoadString = useCallback(debounce(editTaskStrings, 1000), []);

  useEffect(() => {
    debounceLoadString({ name, description, favorite, concluded });
  }, [name, description]);

  function editTaskStrings(item) {
    if (item.description !== description || item.name !== name) {
      dispatch(editTask({ id: task.id, ...item }));
    }
  }

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
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  editTask({
                    id: task.id,
                    name,
                    description,
                    favorite,
                    concluded: !concluded,
                  }),
                );
                setConcluded(!concluded);
              }}
              style={[
                styles.round,
                { borderColor: theme.colors.onSurfaceSecundary },
                concluded && styles.roundConcluded,
              ]}>
              {concluded && (
                <Icon name="check" color={colors.WHITE} size={15} />
              )}
            </TouchableOpacity>
            <TextInput
              style={[
                styles.input,
                {
                  color: theme.colors.onSurfacePrimary,
                  fontSize: fonts.HEADLINE,
                },
                concluded && styles.inputConcluded,
              ]}
              onChangeText={(txt) => setName(txt)}
              value={name}
              multiline
              maxLength={240}
              keyboardAppearance={theme.type}
              placeholderTextColor={theme.colors.onSurfaceSecundary}
              placeholder="Digite o nome da tarefa"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setFavorite(!favorite);
              dispatch(
                editTask({
                  id: task.id,
                  name,
                  description,
                  concluded,
                  favorite: !favorite,
                }),
              );
            }}
            style={[
              styles.item,
              { borderBottomColor: theme.colors.onSurfaceDisable },
            ]}>
            <IconAwesome
              name={favorite ? 'star' : 'star-o'}
              size={25}
              color={favorite ? colors.YELLOW : theme.colors.onSurfacePrimary}
            />
            <TEText
              style={[
                styles.itemText,
                { color: theme.colors.onSurfacePrimary },
              ]}>
              {favorite ? 'Desfavoritar tarefa' : 'Favoritar tarefa'}
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
              keyboardAppearance={theme.type}
              placeholder="Incluir descrição"
              placeholderTextColor={theme.colors.onSurfaceSecundary}
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
