import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Images from '../../../assets/images/Images';

type Props = {
  left?: boolean;
  right?: boolean;
  onBackPress?: () => void;
  onPressGlob?: () => void;
};
const Header: React.FC<Props> = ({onBackPress, onPressGlob}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconViewStyle}>
        {onBackPress && (
          <TouchableOpacity
            style={styles.leftButtonStyle}
            onPress={onBackPress}>
            <Image
              source={Images.authPage.left_icon}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerViewStyle}>
        <Image
          source={Images.splashPage.welcome_background}
          style={styles.logoStyle}
        />
        <Text style={styles.boldTextStyle}>Woof</Text>
        <Text style={styles.textStyle}>tag.</Text>
      </View>
      <View style={styles.iconViewStyle}>
        {onPressGlob && (
          <TouchableOpacity
            style={styles.rightButtonStyle}
            onPress={onPressGlob}>
            <Image source={Images.authPage.glob} style={styles.iconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  centerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftButtonStyle: {
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  iconStyle: {},
  logoStyle: {height: 29, width: 22, marginHorizontal: 5},
  boldTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '300',
  },
  rightButtonStyle: {
    backgroundColor: '#0993e8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 6,
  },
  iconViewStyle: {height: 35, width: 35},
});
export default Header;
