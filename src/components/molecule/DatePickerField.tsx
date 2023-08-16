import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';

type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onPressField?: () => void;
};
const DatePickerField: React.FC<Props> = ({
  label,
  placeholder,
  error,
  value,
  onPressField,
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
        <Text
          style={[
            styles.textFieldStyle,
            error ? styles.errorTextStyle : {},
            value ? {} : {color: '#75798c'},
          ]}>
          {value ? value : placeholder}
        </Text>
        <TouchableOpacity onPress={onPressField}>
          <Image source={Images.drop_icon} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      {error && (
        <Text style={styles.errorStyle}>
          <Image source={Images.authPage.union} /> {error}
        </Text>
      )}
    </View>
  );
};

export default DatePickerField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  textFieldViewStyle: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginVertical: 10,
  },
  textFieldErrorViewStyle: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E30000',
    marginVertical: 10,
  },
  textFieldStyle: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    lineHeight: 20,
  },
  errorStyle: {
    fontSize: 12,
    color: '#E30000',
    textAlignVertical: 'center',
  },
  labelStyle: {
    color: '#000',
    fontSize: 14,
    lineHeight: 17.5,
  },
  iconStyle: {
    height: 20,
    width: 30,
    marginLeft: 10,
  },

  errorTextStyle: {
    color: '#E30000',
  },
});
