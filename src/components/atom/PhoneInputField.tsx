import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ReactNativePhoneInput from 'react-native-phone-input';
import Colors from '../../assets/colors/Colors';
import {heightPercentageToDP as hp} from '../../assets/sizes/Sizes';
import ModalSlider from './ModalSlider';
import Images from '../../assets/images/Images';
import {translate} from '../../translations/translate';

const PhoneInputField = () => {
  const ref = useRef<ReactNativePhoneInput>(null);
  const [modal, setModal] = useState(false);

  const pickerData = ref.current?.getPickerData();
  console.log(pickerData);

  return (
    <View style={styles.container}>
      <Text>{translate('phone')}</Text>
      <ReactNativePhoneInput
        style={styles.inputViewStyle}
        ref={ref}
        initialCountry={'de'}
        renderFlag={({imageSource}) => {
          return (
            <View style={styles.flagView}>
              <Image source={imageSource} style={styles.flagStyle} />
              <Image source={Images.drop_icon} />
            </View>
          );
        }}
        onPressFlag={() => {
          setModal(true);
        }}
        textProps={{
          placeholder: '5986 694 589',
        }}
      />
      <ModalSlider visible={modal}>
        <View>
          <FlatList
            data={pickerData}
            renderItem={({item}) => {
              return (
                <React.Fragment>
                  <TouchableOpacity
                    style={styles.modalFlagViewStyle}
                    onPress={() => {
                      setModal(false);
                      ref.current?.selectCountry(item?.iso2);
                    }}>
                    <Image source={item?.image} style={styles.flagStyle} />
                    <Text style={styles.modalTextStyle}>
                      {item?.label} ( {item.dialCode} )
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.separatorViewStyle} />
                </React.Fragment>
              );
            }}
          />
        </View>
      </ModalSlider>
    </View>
  );
};

export default PhoneInputField;

const styles = StyleSheet.create({
  container: {},
  inputViewStyle: {
    borderWidth: 1,
    borderColor: Colors.border_grey,
    flexDirection: 'row',
    padding: hp(1),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(1),
    borderRadius: hp(0.8),
    color: Colors.lightGrey,
  },
  flagStyle: {
    height: hp(3),
    width: hp(4),
    borderRadius: 4,
  },
  labelStyle: {
    color: '#000',
    fontSize: hp(1.6),
    lineHeight: hp(1.8),
  },
  textFieldViewStyle: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border_grey,
    marginVertical: hp(1),
  },
  flagView: {
    flexDirection: 'row',
  },
  modalTextStyle: {marginLeft: 20, fontSize: hp(1.8), fontWeight: '300'},
  separatorViewStyle: {
    height: 2,
    backgroundColor: Colors.grey_bg,
    marginVertical: hp(2),
  },
  modalFlagViewStyle: {flexDirection: 'row', alignItems: 'center'},
});
