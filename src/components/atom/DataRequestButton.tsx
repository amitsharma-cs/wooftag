import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  source?: ImageSourcePropType;
  label?: string;
  subLabel?: string;
  onPress?: () => void;
  rightIconSource?: ImageSourcePropType;
};
const DataRequestButton: React.FC<Props> = ({
  source,
  label,
  subLabel,
  onPress,
  rightIconSource,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {source && <Image source={source} style={styles.iconStyle} />}
      <View style={styles.textViewStyle}>
        <Text style={styles.primaryTextStyle}>{label}</Text>
        {subLabel && <Text style={styles.secondaryTextStyle}>{subLabel}</Text>}
      </View>
      {rightIconSource && (
        <Image source={rightIconSource} style={styles.rightIconStyle} />
      )}
    </TouchableOpacity>
  );
};

export default DataRequestButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F5FC',
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 1,
    justifyContent: 'space-between',
  },
  textViewStyle: {},
  primaryTextStyle: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
    color: '#000832',
  },
  secondaryTextStyle: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: '300',
    color: '#000832',
  },
  iconStyle: {marginRight: 15},
  rightIconStyle: {alignItems: 'flex-end', marginRight: 5},
});
