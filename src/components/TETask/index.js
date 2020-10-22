import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import PropTypes from 'prop-types';
import TEText from '../TEText';

function TETask({ concluded, name, onPress, onPressRadioButton }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TouchableOpacity
        onPress={onPressRadioButton}
        style={[styles.round, concluded && styles.roundConcluded]}>
        {concluded && <Icon name="check" color={colors.WHITE} size={15} />}
      </TouchableOpacity>
      <View>
        <TEText style={[styles.title, concluded && styles.titleConcluded]}>
          {name}
        </TEText>
      </View>
    </TouchableOpacity>
  );
}

TETask.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  onPressRadioButton: PropTypes.func,
};

TETask.defaultProps = {
  onPress: () => {},
  name: '',
  onPressRadioButton: () => {},
};

export default TETask;
