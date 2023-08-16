import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../../assets/images/Images';

type Props = {
  text?: string;
  subText?: string;
  onPress?: () => void;
  leftIconSource?: ImageSourcePropType;
};
const ProfileButton: React.FC<Props> = ({
  text,
  subText,
  onPress,
  leftIconSource,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {leftIconSource ? <Image source={leftIconSource} /> : null}
      <View style={styles.textViewStyle}>
        <Text style={styles.textStyle}>
          {text}
          <Text style={styles.subTextStyle}>{subText}</Text>
        </Text>
        <Image source={Images.right_icon} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F2F5FC',
    borderRadius: 12,
    paddingVertical: 20,
    paddingLeft: 18,
    paddingRight: 8,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginTop: 15,
  },
  textViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 13,
  },
  textStyle: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '700',
  },
  subTextStyle: {
    fontWeight: '300',
  },
});
