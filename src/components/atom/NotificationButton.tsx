import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';

type Props = {
  source?: ImageSourcePropType;
  label?: string;
  subLabel?: string;
  onPress?: () => void;
};
const NotificationButton: React.FC<Props> = ({
  source,
  label,
  subLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={source ? source : Images.NotifyPage.icon_map}
        style={styles.iconStyle}
      />
      <View style={styles.textViewStyle}>
        <Text style={styles.primaryTextStyle}>{label}</Text>
        <Text style={styles.secondaryTextStyle}>{subLabel}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F5FC',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginVertical: 5,
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
});
