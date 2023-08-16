import {SafeAreaView, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';

const ScanWooftagScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default ScanWooftagScreen;
