import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useAppSelector} from '../redux/hooks';
import {AuthStack, unAuthStack} from './RouteNames';
const Stack = createStackNavigator();

function RootNavigator() {
  const {isAuthenticated} = useAppSelector(state => state.authenticationState);
  function renderNavigation() {
    if (!isAuthenticated) {
      return (
        <Stack.Screen
          name={AuthStack.name}
          component={AuthStack.component}
          options={{
            animationEnabled: false,
          }}
        />
      );
    } else {
      return (
        <Stack.Screen
          name={unAuthStack.name}
          component={unAuthStack.component}
        />
      );
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: 'white',
          },
          headerShown: false,
        }}>
        {renderNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
