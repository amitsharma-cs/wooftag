import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';

export const styles = StyleSheet.create({
  container: {flex: 1, padding: wp(5.5)},
  mainContainer: {flex: 1, backgroundColor: Colors.white},
  btnIcon: {height: hp(3), width: hp(3), marginRight: wp(3)},
  imageContainer: {
    height: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey_bg,
    borderRadius: hp(1),
  },
  headingText: {
    fontSize: hp(3.4),
    fontWeight: '700',
    textAlign: 'center',
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  descriptionText: {
    fontSize: hp(2),
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: hp(3),
    marginHorizontal: wp(3),
  },
  codeContainer: {
    backgroundColor: Colors.grey_bg,
    marginHorizontal: wp(8),
    marginVertical: hp(1),
    padding: hp(1),
    borderRadius: hp(1),
  },
  blueText: {
    color: Colors.blue_text,
    fontSize: hp(1.8),
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: hp(3),
  },
  codeText: {
    color: Colors.blue_text,
    fontSize: hp(1.8),
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: hp(3),
    textDecorationLine: 'underline',
  },
  subHeading: {
    fontSize: hp(1.6),
    fontWeight: '700',
    lineHeight: hp(2.4),
    marginTop: hp(2),
  },
  flatListView: {
    marginBottom: hp(2),
  },
});
