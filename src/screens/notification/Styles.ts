import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: wp(5.5),
  },
  primaryText: {
    fontSize: hp(3.2),
    fontWeight: '700',
    lineHeight: hp(3),
    textAlign: 'center',
    color: '#000832',
  },
  secondaryText: {
    fontSize: hp(2),
    fontWeight: '400',
    lineHeight: hp(3),
    marginTop: hp(1.5),
    textAlign: 'center',
    color: '#000832',
  },
  item: {
    // padding: 2,
  },
  flatView: {
    marginTop: hp(3),
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(30),
    paddingVertical: 25,
  },
  imgStyle: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  deleteText: {
    fontSize: hp(2.2),
    fontWeight: '700',
    color: Colors.white,
  },
  deleteBtnView: {
    alignSelf: 'center',
  },
});
