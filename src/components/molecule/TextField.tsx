import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';
import Colors from '../../assets/colors/Colors';

type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  passwordField?: boolean;
  secureTextField?: boolean;
  value?: string;
  onChange?: (e: string) => void;
  onPressEye?: () => void;
  validateIcon?: boolean;
  validate?: boolean;
  prefix?: string;
};
const TextField: React.FC<Props> = ({
  label,
  placeholder,
  error,
  passwordField,
  secureTextField,
  value,
  onChange,
  onPressEye,
  validateIcon,
  validate,
  prefix,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.labelStyle, error ? styles.errorTextStyle : {}]}>
        {label}
      </Text>
      <View
        style={
          error ? styles.textFieldErrorViewStyle : styles.textFieldViewStyle
        }>
        {prefix && <Text style={styles.prefixStyle}>{prefix}</Text>}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          style={[styles.textFieldStyle, error ? styles.errorTextStyle : {}]}
          placeholderTextColor={error ? '#E30000' : '#9A9A9A'}
          secureTextEntry={secureTextField}
        />
        {passwordField && (
          <TouchableOpacity onPress={onPressEye}>
            <Image
              source={
                secureTextField
                  ? Images.authPage.close_eye
                  : Images.authPage.open_eye
              }
              style={[styles.iconStyle, error ? styles.errorColor : {}]}
            />
          </TouchableOpacity>
        )}
        {value && validate && (
          <TouchableOpacity onPress={onPressEye}>
            <Image
              source={
                validateIcon ? Images.authPage.check : Images.authPage.cross
              }
              style={styles.validIconStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={styles.errorStyle}>
          <Image source={Images.authPage.union} /> {error}
        </Text>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1),
  },
  textFieldViewStyle: {
    flexDirection: 'row',
    paddingHorizontal: hp(1.8),
    paddingVertical: Platform.OS === 'android' ? 0 : hp(1.8),
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginVertical: 10,
    alignItems: 'center',
  },
  textFieldErrorViewStyle: {
    flexDirection: 'row',
    paddingHorizontal: hp(1.8),
    paddingVertical: Platform.OS === 'android' ? 0 : hp(1.8),
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: '#E30000',
    marginVertical: 10,
    alignItems: 'center',
  },
  textFieldStyle: {
    flex: 1,
    fontSize: hp(1.8),
    color: Colors.lightGrey,
    lineHeight: hp(2),
  },
  errorStyle: {
    fontSize: hp(1.4),
    color: '#E30000',
    textAlignVertical: 'center',
  },
  labelStyle: {
    color: Colors.lightGrey,
    fontSize: hp(1.6),
    lineHeight: hp(2),
  },
  iconStyle: {
    height: hp(2.2),
    width: hp(2.2),
    marginLeft: 30,
  },
  validIconStyle: {
    height: hp(2),
    width: hp(2),
  },
  errorColor: {
    tintColor: '#E30000',
  },
  errorTextStyle: {
    color: '#E30000',
  },
  prefixStyle: {
    fontSize: hp(1.8),
    color: '#000',
    lineHeight: hp(2),
    marginRight: hp(1),
  },
});
