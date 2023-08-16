import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};
const BottomView: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default BottomView;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
