import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  title?: string;
  onPress?: () => void;
};
const NormalButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NormalButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 15,
    marginVertical: 10,
  },
  textStyle: {
    color: '#000832',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    padding: 17,
  },
});
