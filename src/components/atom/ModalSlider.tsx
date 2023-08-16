import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../assets/sizes/Sizes';

type Props = {
  children?: React.ReactNode;
  visible?: boolean;
  closeModal?: () => void;
};
const ModalSlider = ({children, visible, closeModal}: Props) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent
      onRequestClose={closeModal}>
      <TouchableOpacity
        style={styles.modalViewMainConatiner}
        activeOpacity={1}
        onPress={closeModal}>
        <TouchableOpacity style={styles.modalViewConatiner} activeOpacity={1}>
          <View style={styles.slider} />
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalSlider;

const styles = StyleSheet.create({
  modalViewMainConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalViewConatiner: {
    paddingHorizontal: 24,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: 20,
    paddingBottom: 40,
  },
  slider: {
    backgroundColor: '#000832',
    borderRadius: 20,
    height: heightPercentageToDP(1),
    width: widthPercentageToDP(10),
    alignSelf: 'center',
  },
});
