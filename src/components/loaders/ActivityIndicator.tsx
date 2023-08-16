import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../../assets/colors/Colors';

function Loader(props: any) {
  const Style = StyleSheet.create({
    loader: {
      alignSelf: 'center',
      margin: 20,
    },
  });
  return (
    <ActivityIndicator
      style={[Style.loader, props?.style]}
      size={60}
      color={props?.color || Colors.primary_color}
    />
  );
}

export default Loader;
