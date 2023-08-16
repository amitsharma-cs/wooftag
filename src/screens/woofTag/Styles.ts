import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: Colors.white},
  container: {
    flex: 1,
    padding: wp(8),
  },
  headerRightIconStylee: {
    height: hp(5),
    width: hp(5),
    // marginEnd: wp(10),
  },
  primaryText: {
    fontSize: hp(2.8),
    fontWeight: '700',
    lineHeight: hp(10),
    textAlign: 'center',
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(5),
  },
  infoIconStyle: {
    tintColor: Colors.lightGrey,
  },
  textStyle: {
    fontSize: hp(1.6),
    fontWeight: '700',
    lineHeight: hp(2),
    color: Colors.lightGrey,
  },
  subTextStyle: {
    fontSize: hp(1.2),
    fontWeight: '300',
    lineHeight: hp(2),
    color: Colors.lightGrey,
  },
  deleteBtnStyle: {
    backgroundColor: Colors.grey_bg,
    paddingVertical: hp(1.5),
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    alignSelf: 'flex-end',
    borderRadius: 10,
    width: wp(28),
    alignItems: 'center',
  },
  thinText: {
    fontWeight: '300',
  },
  btnTextStyle: {
    fontSize: hp(1.5),
    fontWeight: '300',
    lineHeight: hp(2),
    color: Colors.lightGrey,
  },
});
