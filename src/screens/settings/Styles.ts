import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingRight: 22,
    paddingLeft: 28,
    paddingVertical: 35,
  },
  textViewStyle: {},
  buttonsViewStyle: {
    marginTop: 10,
    marginBottom: 70,
  },
  primaryTextStyle: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    color: Colors.lightGrey,
    paddingVertical: 4,
  },
  secondaryTextStyle: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '300',
    color: Colors.lightGrey,
  },
  bottomViewStyle: {
    marginBottom: 88,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topTextView: {
    width: wp(90),
    alignSelf: 'center',
    left: wp(1),
  },
  accountText: {
    fontSize: hp(2.3),
    fontWeight: '700',
    lineHeight: hp(3),
    marginVertical: 2,
    color: Colors.lightGrey,
  },
  subText: {
    fontSize: wp(4.1),
    fontWeight: '300',
    lineHeight: hp(3),
    marginTop: hp(1),
    color: Colors.lightGrey,
  },
  inputView: {
    marginTop: hp(2),
  },
  leftIconStyle: {
    width: wp(6),
    height: hp(6),
  },
});
