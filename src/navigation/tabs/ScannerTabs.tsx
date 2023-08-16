import React from 'react';
import RouteNames from '../RouteNames';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function ScannerTabs() {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.scannerPage.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RouteNames.scannerPage.name}
        component={RouteNames.scannerPage.component}
      />
    </Stack.Navigator>
  );
}

export default ScannerTabs;
