import React from 'react';
import RouteNames from '../RouteNames';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function HomeTabs() {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.homePage.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RouteNames.homePage.name}
        component={RouteNames.homePage.component}
      />
    </Stack.Navigator>
  );
}

export default HomeTabs;
