import React from 'react';
import {Image, Platform, View} from 'react-native';
import Images from '../../assets/images/Images';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {tabRoutesName} from '../RouteNames';
import Colors from '../../assets/colors/Colors';

const Tab = createMaterialTopTabNavigator();
const RootTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        animationEnabled: false,
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarStyle: {
          backgroundColor: Colors.white,
          paddingBottom: Platform.OS === 'android' ? 25 : 50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        // tabBarActiveTintColor: Colors.app_green,
        tabBarLabelStyle: {
          fontSize: 10,
          textTransform: 'none',
        },
        tabBarInactiveTintColor: Colors.black,
        tabBarPressColor: Colors.white,
        tabBarLabel: () => null,
      })}
      initialRouteName={'home'}
      tabBarPosition="bottom">
      <Tab.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // paddingBottom: 10,
              }}>
              <Image
                source={focused ? Images.homeActiveIcon : Images.homeIcon}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? Colors.primary_color : Colors.black,
                }}
              />
            </View>
          ),
        }}
        name={tabRoutesName.homeTab.name}
        component={tabRoutesName.homeTab.component}
      />

      <Tab.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  focused
                    ? Images.ScannerPage.scan_iconActive
                    : Images.ScannerPage.scan_icon
                }
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? Colors.primary_color : Colors.black,
                }}
              />
            </View>
          ),
        }}
        name={tabRoutesName.scanTab.name}
        component={tabRoutesName.scanTab.component}
      />

      <Tab.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  focused
                    ? Images.NotifyPage.notify_iconActive
                    : Images.NotifyPage.notify_icon
                }
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? Colors.primary_color : Colors.black,
                }}
              />
            </View>
          ),
        }}
        name={tabRoutesName.notifyTab.name}
        component={tabRoutesName.notifyTab.component}
      />

      <Tab.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  focused
                    ? Images.SettingPage.setting_iconActive
                    : Images.SettingPage.setting_icon
                }
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? Colors.primary_color : Colors.black,
                }}
              />
            </View>
          ),
        }}
        name={tabRoutesName.settingTab.name}
        component={tabRoutesName.settingTab.component}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;
