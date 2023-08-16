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
  onChange?: (e: string) => void;
};
const DescriptionField: React.FC<Props> = ({
  label,
  placeholder,
  error,
  value,
  onChange,
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
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          style={[styles.textFieldStyle, error ? styles.errorTextStyle : {}]}
          placeholderTextColor={error ? '#E30000' : '#75798c'}
          multiline={true}
        />
      </View>
      {error && (
        <Text style={styles.errorStyle}>
          <Image source={Images.authPage.union} /> {error}
        </Text>
      )}
    </View>
  );
};

export default DescriptionField;

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
    height: 156,
  },
  textFieldErrorViewStyle: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E30000',
    marginVertical: 10,
    flex: 1,
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
