import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RouteNames from '../RouteNames';

const Stack = createStackNavigator();

function StackNavigator() {
  function renderNavigations() {
    return (
      <>
        <Stack.Screen
          name={RouteNames.splashPage.name}
          component={RouteNames.splashPage.component}
        />
        <Stack.Screen
          name={RouteNames.welcomePage.name}
          component={RouteNames.welcomePage.component}
        />
        <Stack.Screen
          name={RouteNames.otpVerficationPage.name}
          component={RouteNames.otpVerficationPage.component}
        />
      </>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={RouteNames.splashPage.name}
      screenOptions={{
        headerShown: false,
      }}>
      {renderNavigations()}
    </Stack.Navigator>
  );
}

export default StackNavigator;
