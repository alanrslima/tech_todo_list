import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TEHeader, TEHeaderButton, TEText, TEAlert } from '~/components';
import { colors } from '~/styles';

function Detail({ navigation, route }) {
  const theme = useSelector((state) => state.theme.theme);
  const { task } = route.params;

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TEHeader
        headerLeft={<TEHeaderButton type="back" onPress={navigation.goBack} />}
      />
      <ScrollView
        style={[styles.content, { backgroundColor: theme.colors.surface }]}>
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
            style={styles.input}
            onChangeText={(txt) => setName(txt)}
            value={name}
            multiline
            maxLength={240}
            placeholder="Nome da tarefa"
          />
        </View>

        <TouchableOpacity
          style={[
            styles.item,
            { borderBottomColor: theme.colors.onSurfaceDisable },
          ]}>
          <Icon name="star" size={25} />
          <TEText
            style={[styles.itemText, { color: theme.colors.onSurfacePrimary }]}>
            Favoritar tarefa
          </TEText>
        </TouchableOpacity>
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

      <TEAlert
        title="Apagar tarefa"
        description="Você tem certeza que deseja apagar esta tarefa?"
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        buttons={[
          { id: 'no', text: 'NÃO', onPress: () => {} },
          { id: 'yes', text: 'SIM', onPress: () => {}, type: 'secundary' },
        ]}
      />
    </View>
  );
}

export default Detail;
