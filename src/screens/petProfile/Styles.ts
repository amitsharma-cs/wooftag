import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../assets/sizes/Sizes';
import Colors from '../../assets/colors/Colors';

// All text color in this App is : #000832

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: wp(1.5),
    paddingHorizontal: 24,
  },
  cardIconStyle: {
    height: hp(4.5),
    width: hp(4.5),
  },
  petBreedStyle: {
    fontSize: hp(2),
    color: '#000832',
    fontWeight: '500',
  },
  secondaryTextStyle: {
    fontSize: hp(1.8),
    color: '#000832',
    fontWeight: '300',
    lineHeight: hp(3.2),
  },
  petDescription: {
    fontSize: hp(1.8),
    color: '#000832',
    textAlign: 'left',
    paddingVertical: hp(1),
    lineHeight: hp(2.4),
    fontWeight: '300',
  },
  petDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  headingStyle: {
    fontSize: hp(2.4),
    color: '#000832',
    fontWeight: 'bold',
    paddingVertical: hp(0.2),
  },
  subHeadingStyle: {
    fontSize: hp(1.8),
    color: '#D3D3D3',
  },
  customPadding: {
    paddingVertical: hp(1.8),
  },
  cardHeading: {
    fontSize: hp(2.2),
    color: '#000832',
    fontWeight: '700',
  },
  descriptionText: {
    fontSize: hp(1.6),
    color: '#000832',
  },
  microChipView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomViewStyle: {
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  lineViewStyle: {
    borderWidth: 1,
    borderColor: '#F2F5FC',
    marginVertical: hp(2),
  },
});
