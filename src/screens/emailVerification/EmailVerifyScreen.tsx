import {Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../components/molecule/Button';
import Images from '../../assets/images/Images';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../navigation/RouteNames';
import {translate} from '../../translations/translate';
import Header from '../../components/molecule/headers/Header';

const EmailVerifyScreen = ({}: any) => {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);
  const [otpMatched, setOtpMatched] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const navigation = useNavigation();
  const [prop] = useClearByFocusCell({
    value,
    setValue,
  });
  const [timer, setTimer] = useState(60);
  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={() => {}} onPressGlob={() => {}} />
      <View style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.emailVerificationText}>
            {translate('verifyEmailText')}
          </Text>
          <Text style={styles.emailTextHeading}>
            {translate('emailVerficationHeading')}
          </Text>
          <Text style={styles.emailSecondTextHeading}>
            {translate('emailDefaultEmailtext')}
          </Text>
        </View>
        <View style={{}}>
          <CodeField
            autoFocus={true}
            ref={ref}
            {...prop}
            value={value}
            onChangeText={setValue}
            cellCount={4}
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
          <Button
            text="Verify"
            onPress={() =>
              navigation.navigate(RouteNames.resetPasswordPage.name)
            }
          />
        ) : (
          <Button
            text="Wrong Code - Try Again"
            onPress={() =>
              navigation.navigate(RouteNames.resetPasswordPage.name)
            }
            errorBackgroundImage={Images.OtpPage.error_image_background}
          />
        )}
        <Text style={styles.text}>{`${translate('timer')} ${timer} ${translate(
          'seconds',
        )}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerifyScreen;
