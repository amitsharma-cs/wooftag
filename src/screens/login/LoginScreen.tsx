import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import TextField from '../../components/molecule/TextField';
import CheckBox from '../../components/molecule/CheckBox';
import SocialButton from '../../components/molecule/SocialButton';
import Images from '../../assets/images/Images';
import RouteNames from '../../navigation/RouteNames';
import Button from '../../components/molecule/Button';
import Header from '../../components/molecule/headers/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = () => {
  const navigation = useNavigation();

  // const [form, setForm] = useState<I_Login_Form>({email: '', password: ''});
  // const [formError, setFormError] = useState<I_Login_Form>({
  //   email: '',
  //   password: '',
  // });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [secureField, setSecureField] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  function goBack() {
    navigation.goBack();
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit() {
    if (email === '') {
      setEmailError('Please enter a valid email address');
    } else if (!emailRegex.test(email || '')) {
      console.log('sdf');
      setEmailError('Please enter a valid email address');
    } else if (password === '') {
      setEmailError('');
      setPasswordError('Wrong password please try again');
    } else {
      setEmailError('');
      setPasswordError('');
      // navigation.navigate(RouteNames.splashPage.name);
    }
  }

  return (
    <SafeAreaView
      style={styles.mainCotainer}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header onBackPress={goBack} onPressGlob={() => {}} />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.headingStyle}>Log in</Text>
          <TextField
            value={email}
            label="Email address"
            placeholder="Your email"
            onChange={e => setEmail(e)}
            validateIcon={emailError ? false : true}
            error={'emailError'}
            validate={email ? true : false}
          />
          <TextField
            value={password}
            label="Password"
            placeholder="Password"
            passwordField
            secureTextField={secureField}
            onPressEye={() => setSecureField(!secureField)}
            onChange={e => setPassword(e)}
            error={passwordError}
          />

          <View style={styles.checkBoxViewStyle}>
            <CheckBox
              label="Remember me"
              onPress={() => setRememberMe(!rememberMe)}
              check={rememberMe}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(RouteNames.forgotPasswordPage.name)
              }>
              <Text style={styles.textStyle}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <Button text="Login" onPress={handleSubmit} />
          <View style={styles.separatorStyle}>
            <View style={styles.lineView} />
            <Text style={styles.separatorTextStyle}>Or Login with</Text>
            <View style={styles.lineView} />
          </View>
          <View style={styles.checkBoxViewStyle}>
            <SocialButton
              source={Images.authPage.facebook}
              containerStyle={styles.socialButtonStyle}
              iconStyle={styles.iconStyle}
            />
            <SocialButton
              source={Images.authPage.google}
              containerStyle={[styles.socialButtonStyle, styles.margin]}
              iconStyle={styles.iconStyle}
            />
            <SocialButton
              source={Images.authPage.apple}
              containerStyle={styles.socialButtonStyle}
              iconStyle={styles.iconStyle}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottomView}>
        <Text style={styles.bottomTextStyle}>
          Don't have an account?
          <Text
            onPress={() => navigation.navigate(RouteNames.singUpPage.name)}
            style={styles.loginButtonStyle}>
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
