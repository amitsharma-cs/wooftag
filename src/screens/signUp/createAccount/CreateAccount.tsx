import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../../navigation/RouteNames';
import TextField from '../../../components/molecule/TextField';
import CheckBox from '../../../components/molecule/CheckBox';
import Button from '../../../components/molecule/Button';
import {I_SignUp_Form} from '../../../interfaces/IForm';
import Header from '../../../components/molecule/headers/Header';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState<I_SignUp_Form>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsCondition: false,
  });
  const [formError, setFormError] = useState<I_SignUp_Form>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsCondition: false,
  });
  const [password, setPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  function goBack() {
    navigation.goBack();
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit() {
    let newFormError = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsCondition: false,
    };

    if (form.name === '') {
      newFormError.name = 'Please tell us your name';
    } else if (form.email === '') {
      newFormError.email = 'Please enter a valid email address';
    } else if (!emailRegex.test(form.email)) {
      newFormError.email = 'Please enter a valid email address';
    } else if (form.password === '') {
      newFormError.password = 'Please enter a password';
    } else if (form.password.length < 8) {
      newFormError.password = 'Password must be at least 8 characters long';
    } else if (form.confirmPassword !== form.password) {
      newFormError.confirmPassword = 'The passwords do not match';
    } else if (!form.termsCondition) {
      newFormError.termsCondition = true;
    }

    setFormError(newFormError);
    console.log(newFormError);

    // Check if there are any errors before navigating
    // if (Object.values(newFormError).every(value => value === '')) {
    navigation.navigate(RouteNames.otpVerficationPage.name);
    // }
  }

  return (
    <SafeAreaView style={styles.mainCotainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Header onBackPress={goBack} onPressGlob={() => {}} />
        <View style={styles.container}>
          <Text style={styles.headingStyle}>Create account</Text>
          <TextField
            label="Name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={e => setForm({...form, name: e})}
            error={formError.name}
          />
          <TextField
            label="Email"
            placeholder="Your email"
            value={form.email}
            onChange={e => setForm({...form, email: e})}
            error={formError.email}
          />
          <TextField
            label="Create a password"
            placeholder="must be 8 character"
            passwordField
            secureTextField={password}
            value={form.password}
            onChange={e => setForm({...form, password: e})}
            error={formError.password}
            onPressEye={() => setPassword(!password)}
          />
          <TextField
            label="Confirm Password"
            placeholder="repeat password"
            passwordField
            secureTextField={confirmPassword}
            value={form.confirmPassword}
            onChange={e => setForm({...form, confirmPassword: e})}
            error={formError.confirmPassword}
            onPressEye={() => setConfirmPassword(!confirmPassword)}
          />
          <CheckBox
            label="I accept the terms and privacy policy"
            check={form.termsCondition}
            onPress={() =>
              setForm({...form, termsCondition: !form.termsCondition})
            }
            error={formError.termsCondition}
          />
          <Button text="Create A Free Account" onPress={handleSubmit} />
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomTextStyle}>
            Already have an account?
            <Text onPress={() => {}} style={styles.loginButtonStyle}>
              {' '}
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
