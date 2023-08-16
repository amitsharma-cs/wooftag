import React from 'react';
import RouteNames from '../RouteNames';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function NotifyTabs() {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.notificationPage.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RouteNames.notificationPage.name}
        component={RouteNames.notificationPage.component}
      />
    </Stack.Navigator>
  );
}

export default NotifyTabs;
