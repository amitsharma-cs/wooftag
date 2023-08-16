import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#fff'},
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 70,
  },
  textStyle: {
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: 20,
  },
  desTextStyle: {
    fontSize: hp(2),
    textAlign: 'center',
    fontWeight: '400',
  },
  socialsViewStyle: {marginVertical: hp(5)},
  bottomView: {alignItems: 'center', marginVertical: 10},
  bottomTextStyle: {
    color: '#706e6e',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButtonStyle: {
    color: '#0fa4fa',
  },
});
