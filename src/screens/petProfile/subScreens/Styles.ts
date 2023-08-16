import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {flex: 1, padding: wp(5.5)},
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(1.5),
    alignItems: 'center',
  },
  dogImageStyle: {
    height: hp(11),
    width: hp(11),
    marginVertical: hp(1),
  },
  textStyle: {
    fontWeight: '300',
    fontSize: 15,
    color: '#000832',
    textAlign: 'center',
  },
  separatorViewStyle: {
    backgroundColor: '#F2F5FC',
    height: 2,
    marginVertical: hp(2),
  },
  behaviorTextStyle: {
    fontSize: hp(2.2),
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: hp(2),
  },
  boldText: {
    fontSize: hp(2.4),
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: hp(3),
  },
  textfieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginLeft: {marginLeft: wp(8), marginTop: hp(1.5)},
});
