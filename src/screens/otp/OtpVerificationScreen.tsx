import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Style';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {translate} from '../../translations/translate';
import Images from '../../assets/images/Images';
import Button from '../../components/molecule/Button';

const OtpVerificationScreen = ({}: any) => {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);
  const [otpMatched, setOtpMatched] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [prop] = useClearByFocusCell({
    value,
    setValue,
  });
  const [timer, setTimer] = useState(60);
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.otpVerficationText}>
          {translate('otpVerficationText')}
        </Text>
        <Text style={styles.otpTextHeading}>
          {translate('otpVerficationHeading')}
        </Text>
        <Text style={styles.otpSecondTextHeading}>
          {translate('otpDefaultEmailtext')}
        </Text>
      </View>
      <View style={{margin: 10}}>
        <CodeField
          autoFocus={true}
          ref={ref}
          {...prop}
          value={value}
          onChangeText={setValue}
          cellCount={6}
          rootStyle={[styles.codeFieldRoot]}
          keyboardType="number-pad"
          editable={counter >= 3 || disable ? false : true}
          renderCell={({index, symbol, isFocused}) => {
            return (
              <Text
                key={index}
                style={[
                  otpMatched ? styles.cell : styles.errorCell,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    borderColor: otpMatched ? 'grey' : '#D2443A',
                    borderWidth: 0.7,
                  },
                  isFocused && styles.focusCell,
                ]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            );
          }}
        />
      </View>
      {otpMatched ? (
        <Button text="Verify" />
      ) : (
        <Button
          text="Wrong Code - Try Again"
          errorBackgroundImage={Images.OtpPage.error_image_background}
        />
      )}
      <Text style={styles.text}>{`${translate('timer')} ${timer} ${translate(
        'seconds',
      )}`}</Text>
    </View>
  );
};

export default OtpVerificationScreen;
