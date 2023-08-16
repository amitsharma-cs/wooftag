import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainCotainer: {flex: 1, backgroundColor: '#fff'},
  container: {flex: 1, padding: hp(2)},
  headingStyle: {
    fontSize: hp(3.4),
    fontWeight: '700',
    marginVertical: hp(3.5),
  },
  bottomView: {
    alignItems: 'center',
    // marginVertical: 10,
    borderTopColor: '#e0e0de',
    borderTopWidth: 1,
    paddingTop: hp(3.5),
    paddingBottom: hp(1),
    backgroundColor: '#fff',
  },
  bottomTextStyle: {
    color: '#706e6e',
    fontSize: hp(1.6),
    fontWeight: '600',
  },
  loginButtonStyle: {
    color: '#0fa4fa',
  },
  checkBoxViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {},
  lineView: {
    flex: 1,
    margin: 5,
    borderWidth: 0.5,
    borderColor: '#bfbfbf',
  },
  separatorStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2.2),
    marginBottom: hp(1),
  },
  separatorTextStyle: {
    marginHorizontal: wp(1),
    color: '#bfbfbf',
    fontSize: hp(1.4),
    fontWeight: '600',
  },
  socialButtonStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: hp(1.8),
    width: 'auto',
    borderRadius: hp(1),
    justifyContent: 'center',
  },
  margin: {
    marginHorizontal: 15,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
});
