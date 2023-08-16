import React from 'react';
import RouteNames from '../RouteNames';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function SettingTabs() {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.settingPage.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RouteNames.settingPage.name}
        component={RouteNames.settingPage.component}
      />
    </Stack.Navigator>
  );
}

export default SettingTabs;
