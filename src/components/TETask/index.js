import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles';
import PropTypes from 'prop-types';
import TEText from '../TEText';
import { useSelector } from 'react-redux';

function TETask({
  concluded,
  name,
  onPress,
  onPressRadioButton,
  onPressFavorite,
  favorite,
}) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { borderBottomColor: theme.colors.onSurfaceDisable },
      ]}>
      <TouchableOpacity
        onPress={onPressRadioButton}
        style={[
          styles.round,
          { borderColor: theme.colors.onSurfaceSecundary },
          concluded && styles.roundConcluded,
        ]}>
        {concluded && <Icon name="check" color={colors.WHITE} size={15} />}
      </TouchableOpacity>
      <View style={styles.content}>
        <TEText
          style={[
            styles.title,
            concluded && styles.titleConcluded,
            { color: theme.colors.onSurfacePrimary },
          ]}>
          {name}
        </TEText>
      </View>
      <TouchableOpacity>
        <IconAwesome
          name={favorite ? 'star' : 'star-o'}
          size={20}
          color={favorite ? colors.YELLOW : theme.colors.onSurfaceSecundary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

TETask.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  onPressRadioButton: PropTypes.func,
  favorite: PropTypes.bool,
  onPressFavorite: PropTypes.func,
};

TETask.defaultProps = {
  onPress: () => {},
  name: '',
  onPressRadioButton: () => {},
  favorite: false,
  onPressFavorite: () => {},
};

export default TETask;
