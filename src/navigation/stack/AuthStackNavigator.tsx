import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RouteNames from '../RouteNames';
import RootTabs from '../tabs/RootTabs';

const Stack = createStackNavigator();
function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'tabs'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'tabs'} component={RootTabs} />
      <Stack.Screen
        name={RouteNames.homePage.name}
        component={RouteNames.homePage.component}
      />
      <Stack.Screen
        name={RouteNames.createPetPage.name}
        component={RouteNames.createPetPage.component}
      />
      <Stack.Screen
        name={RouteNames.petProfilePage.name}
        component={RouteNames.petProfilePage.component}
      />
      <Stack.Screen
        name={RouteNames.settingPage.name}
        component={RouteNames.settingPage.component}
      />
      <Stack.Screen
        name={RouteNames.notificationPage.name}
        component={RouteNames.notificationPage.component}
      />
      <Stack.Screen
        name={RouteNames.scannerPage.name}
        component={RouteNames.scannerPage.component}
      />
      <Stack.Screen
        name={RouteNames.locationMapPage.name}
        component={RouteNames.locationMapPage.component}
      />
      <Stack.Screen
        name={RouteNames.userAccountPage.name}
        component={RouteNames.userAccountPage.component}
      />
      <Stack.Screen
        name={RouteNames.dataSubjectRequestPage.name}
        component={RouteNames.dataSubjectRequestPage.component}
      />
      <Stack.Screen
        name={RouteNames.activateWooftagPage.name}
        component={RouteNames.activateWooftagPage.component}
      />
      <Stack.Screen
        name={RouteNames.scanWooftagPage.name}
        component={RouteNames.scanWooftagPage.component}
      />
      <Stack.Screen
        name={RouteNames.scanNfcPage.name}
        component={RouteNames.scanNfcPage.component}
      />

      <Stack.Screen
        name={RouteNames.petDetails.name}
        component={RouteNames.petDetails.component}
      />
      <Stack.Screen
        name={RouteNames.phoneNumberScreen.name}
        component={RouteNames.phoneNumberScreen.component}
      />
      <Stack.Screen
        name={RouteNames.addressScreen.name}
        component={RouteNames.addressScreen.component}
      />
      <Stack.Screen
        name={RouteNames.addAddress.name}
        component={RouteNames.addAddress.component}
      />
      <Stack.Screen
        name={RouteNames.healthInfoScreen.name}
        component={RouteNames.healthInfoScreen.component}
      />
      <Stack.Screen
        name={RouteNames.addPhoneNumber.name}
        component={RouteNames.addPhoneNumber.component}
      />
      <Stack.Screen
        name={RouteNames.vetRegisteration.name}
        component={RouteNames.vetRegisteration.component}
      />
      <Stack.Screen
        name={RouteNames.WoofTag.name}
        component={RouteNames.WoofTag.component}
      />
      <Stack.Screen
        name={RouteNames.petBehaviourScreens.name}
        component={RouteNames.petBehaviourScreens.component}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
