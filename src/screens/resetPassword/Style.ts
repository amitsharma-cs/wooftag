import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';
import Colors from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerView: {
    width: wp(90),
    marginTop: hp(3),
    alignSelf: 'center',
  },
  subcontainerView: {
    width: wp(90),
    alignSelf: 'center',
  },
  textOuterView: {
    width: wp(90),
    height: hp(10),
    marginTop: hp(5),
    alignSelf: 'center',
  },
  forgotpasswordText: {
    paddingTop: hp(2),
    lineHeight: 24,
    fontWeight: '700',
    fontSize: 32,
    color: Colors.black,
  },
  forgotTextHeading: {
    marginTop: hp(2),
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 15,
    color: Colors.dark_grey,
  },
  rightIconStyle: {
    height: hp(6),
    width: wp(6),
  },
  bottomView: {
    alignItems: 'center',
    borderTopColor: '#e0e0de',
    borderTopWidth: 1,
    paddingTop: 30,
    paddingBottom: 10,
  },
  bottomTextStyle: {
    color: '#000832',
    fontSize: 14,
    fontWeight: '400',
  },
  loginButtonStyle: {
    color: '#54A7DC',
    fontWeight: '600',
  },
});
