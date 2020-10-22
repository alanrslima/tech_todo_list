import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { metrics } from '~/styles';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { TEText } from '..';
import TEButton from '../TEButton';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function TEAlert({ visible, onClose, title, description, buttons }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.3}
      onBackdropPress={onClose}
      deviceWidth={metrics.SCREEN_WIDTH}
      deviceHeight={metrics.SCREEN_HEIGHT}
      style={styles.modal}
      // onSwipeComplete={swipeDisable ? () => { } : onClose}
      // swipeDirection={swipeDisable ? '' : 'down'}
    >
      <View style={[styles.content, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={onClose}
            style={[
              styles.headerButton,
              { backgroundColor: theme.colors.onSurfaceDisable },
            ]}>
            <Icon name="x" size={20} color={theme.colors.onSurfaceSecundary} />
          </TouchableOpacity>
        </View>
        <TEText
          style={[styles.title, { color: theme.colors.onSurfacePrimary }]}
          font="bold">
          {title}
        </TEText>
        <TEText
          style={[
            styles.description,
            { color: theme.colors.onSurfaceSecundary },
          ]}>
          {description}
        </TEText>
        {buttons.map((button) => (
          <View key={button.id} style={styles.containerButton}>
            <TEButton
              onPress={button.onPress}
              type={button.type}
              text={button.text}
            />
          </View>
        ))}
      </View>
    </Modal>
  );
}

TEAlert.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      onPress: PropTypes.func,
      type: PropTypes.oneOf(['primary', 'secundary']),
    }),
  ),
};

TEAlert.defaultProps = {
  buttons: [],
  visible: false,
  onClose: () => {},
  title: undefined,
  description: undefined,
};

export default TEAlert;
