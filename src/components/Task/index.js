import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import PropTypes from 'prop-types';

function Task({ concluded, name }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.round, concluded && styles.roundConcluded]}>
        {concluded && <Icon name="check" color={colors.WHITE} size={15} />}
      </View>
      <View>
        <Text style={[styles.title, concluded && styles.titleConcluded]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

Task.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
};

Task.defaultProps = {
  onPress: () => {},
  name: '',
};

export default Task;
