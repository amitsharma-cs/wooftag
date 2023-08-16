import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';

type Props = {
  label?: string;
  onPress?: () => void;
  error?: boolean;
  check?: boolean;
};
const CheckBox: React.FC<Props> = ({label, onPress, error, check}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={check ? Images.authPage.check : Images.authPage.off_circle}
          height={20}
          width={20}
          style={error ? styles.checkBoxErrorStyle : styles.checkBoxStyle}
        />
      </TouchableOpacity>
      <Text style={error ? styles.errorLabelStyle : styles.labelStyle}>
        {label}
      </Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  checkBoxStyle: {
    marginRight: 10,
  },
  checkBoxErrorStyle: {
    marginRight: 10,
    tintColor: 'red',
  },
  labelStyle: {},
  errorLabelStyle: {
    color: 'red',
  },
});
