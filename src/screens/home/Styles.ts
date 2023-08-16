import {StyleSheet} from 'react-native';
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
  },
  paddingView: {
    // padding: wp(3),
    marginTop: hp(3),
  },
  dynamicImageView: {
    borderRadius: hp(1.8),
    backgroundColor: '#DADFEA80',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
  },
  topView: {
    borderRadius: hp(1.8),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(90),
    height: hp(25),
    alignSelf: 'center',
  },
  dynamicText: {
    fontSize: hp(4),
    lineHeight: hp(5),
    textAlign: 'center',
    paddingVertical: hp(6),
    color: '#000832',
  },
  buttonIconStyle: {
    height: hp(2.8),
    right: wp(7),
  },
  textView: {
    marginTop: hp(4),
    alignSelf: 'center',
  },
  primaryText: {
    fontSize: hp(3),
    fontWeight: '700',
    lineHeight: hp(3),
    marginVertical: 2,
    textAlign: 'center',
    color: '#000832',
  },
  secondaryText: {
    fontSize: hp(1.6),
    fontWeight: '400',
    lineHeight: hp(3),
    textAlign: 'center',
    color: '#000832',
  },
  flatlistViewStyle: {marginTop: hp(2.5)},
  modalViewMainConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalViewConatiner: {
    paddingHorizontal: 24,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: 20,
    paddingBottom: 40,
  },
  slider: {
    backgroundColor: '#000832',
    borderRadius: 20,
    height: hp(1),
    width: wp(10),
    alignSelf: 'center',
  },
  verticalMargin: {
    marginVertical: 30,
  },
  descriptionTextStyle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000832',
    paddingVertical: 10,
  },
  modalHeadingTextStyle: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '700',
    color: '#000832',
  },
  firstSwiperView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
  },
  image_add: {
    flex: 1,
    width: wp(100),
    height: hp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  addBtnView: {
    // marginTop: hp(1),
  },
});
