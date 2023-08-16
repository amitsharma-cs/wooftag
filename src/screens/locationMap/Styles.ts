import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    padding: wp(5.5),
  },
  primaryText: {
    fontSize: hp(3),
    fontWeight: '700',
    lineHeight: hp(3.5),
    marginVertical: 2,
    textAlign: 'center',
    color: Colors.lightGrey,
  },
  secondaryTextStyle: {
    fontSize: hp(2),
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.lightGrey,
    marginTop: hp(2),
  },
  locationTextStyle: {
    fontSize: hp(2),
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.lightGrey,
    marginTop: hp(0.5),
  },
  locationSubText: {
    fontSize: hp(2),
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.lightGrey,
    marginTop: hp(2),
  },
  mapView: {
    height: hp(40),
    width: wp(100),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  mapBtnStyle: {
    height: hp(6),
    width: wp(6),
    marginRight: 20,
  },
});
