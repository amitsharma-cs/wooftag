import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RouteNames from '../RouteNames';

const Stack = createStackNavigator();
function UnAuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.splashPage.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RouteNames.splashPage.name}
        component={RouteNames.splashPage.component}
      />
      <Stack.Screen
        name={RouteNames.welcomePage.name}
        component={RouteNames.welcomePage.component}
      />
      <Stack.Screen
        name={RouteNames.loginPage.name}
        component={RouteNames.loginPage.component}
      />
      <Stack.Screen
        name={RouteNames.singUpPage.name}
        component={RouteNames.singUpPage.component}
      />
      <Stack.Screen
        name={RouteNames.createAccountPage.name}
        component={RouteNames.createAccountPage.component}
      />
      <Stack.Screen
        name={RouteNames.otpVerficationPage.name}
        component={RouteNames.otpVerficationPage.component}
      />
      <Stack.Screen
        name={RouteNames.forgotPasswordPage.name}
        component={RouteNames.forgotPasswordPage.component}
      />
      <Stack.Screen
        name={RouteNames.emailVerifyPage.name}
        component={RouteNames.emailVerifyPage.component}
      />
      <Stack.Screen
        name={RouteNames.resetPasswordPage.name}
        component={RouteNames.resetPasswordPage.component}
      />
    </Stack.Navigator>
  );
}

export default UnAuthStackNavigator;
