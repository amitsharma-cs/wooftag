import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
    paddingTop: hp(15),
  },
  textConatiner: {
    marginTop: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  appNameStyle: {
    height: 50,
    width: 180,
  },
  buttonsSecondConatiner: {
    marginHorizontal: wp(5),
    marginTop: hp(1),
  },
  loginButtonStyle: {
    backgroundColor: '#459cd1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 15,
  },
  centeredTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginButtonTextStyle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '700',
  },
  createFreeButtonStyle: {
    backgroundColor: '#fff',
    height: hp(7),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  signUpButtonTextStyle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  bgImageStyle: {
    height: hp(25),
    width: wp(40),
  },
  woofText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '900',
    fontSize: 35,
  },
  petsInstructText: {
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '300',
    fontSize: 15,
  },
  freeBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
