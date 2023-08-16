import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Button from '../components/molecule/Button';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../assets/sizes/Sizes';
import Colors from '../assets/colors/Colors';
import Images from '../assets/images/Images';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  closeModal?: () => void;
};
const WoofTagModal: React.FC<Props> = ({visible, closeModal}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <TouchableOpacity
        style={styles.modalViewMainConatiner}
        activeOpacity={1}
        onPress={closeModal}>
        <TouchableOpacity style={styles.modalViewConatiner} activeOpacity={1}>
          <View style={styles.slider} />
          <View style={styles.container}>
            <Text style={styles.headingStyle}>
              Wooftag {translate('on')} | {translate('off')}
            </Text>
            <Text style={styles.secondaryStyle}>
              {translate('protectWooftag')}
            </Text>
            <View style={styles.imageViewStyle}>
              <Text style={styles.secondaryStyle}>IMG</Text>
            </View>
            <Text style={styles.primaryTextStyle}>
              {translate('howItWorks')}
            </Text>
            <View style={styles.instructionContainer}>
              <Image source={Images.switch} style={styles.iconStyle} />
              <Text style={[styles.secondaryStyle, styles.flex]}>
                {translate('switchOnOff')}
              </Text>
            </View>
            <View style={styles.instructionContainer}>
              <Text style={styles.iconTextStyle}>{translate('on')}</Text>
              <Text style={[styles.secondaryStyle, styles.flex]}>
                {translate('onDescription')}
              </Text>
            </View>
            <View style={styles.instructionContainer}>
              <Text style={styles.iconTextStyle}>{translate('off')}</Text>
              <Text style={[styles.secondaryStyle, styles.flex]}>
                {translate('offDescription')}
              </Text>
            </View>
            <Button text={translate('gotIt')} onPress={closeModal} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default WoofTagModal;

const styles = StyleSheet.create({
  modalViewMainConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalViewConatiner: {
    paddingHorizontal: hp(2.6),
    borderTopEndRadius: hp(2),
    borderTopStartRadius: hp(2),
    backgroundColor: '#fff',
    paddingTop: hp(2),
    paddingBottom: hp(4),
  },
  slider: {
    backgroundColor: '#000832',
    borderRadius: 20,
    height: hp(1),
    width: wp(10),
    alignSelf: 'center',
  },
  mainContainer: {},
  container: {
    marginTop: hp(2.8),
  },
  headingStyle: {
    fontSize: hp(2.6),
    fontWeight: '700',
    color: Colors.lightGrey,
    lineHeight: hp(2.6),
    marginVertical: hp(2),
  },
  primaryTextStyle: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.lightGrey,
    lineHeight: hp(2.6),
  },
  secondaryStyle: {
    fontSize: hp(1.8),
    fontWeight: '300',
    color: Colors.lightGrey,
    lineHeight: hp(2.6),
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageViewStyle: {
    height: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey_bg,
    borderRadius: hp(2),
    marginVertical: hp(3),
  },
  iconTextStyle: {
    fontSize: hp(2),
    fontWeight: '700',
    color: '#54A7DC',
    lineHeight: hp(2.6),
    padding: 20,
    width: wp(18),
  },
  iconStyle: {
    margin: wp(5),
  },
  flex: {
    flex: 1,
  },
});
