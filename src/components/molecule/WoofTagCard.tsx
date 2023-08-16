import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';
import Images from '../../assets/images/Images';
import ToggleButton from '../../../src/components/atom/ToggleButton';

type Props = {
  name?: string;
  leftImageSource?: ImageSourcePropType;
  wooftagName?: string;
  onPress?: () => void;
};
const WoofTagCard: React.FC<Props> = ({
  name,
  leftImageSource,
  wooftagName,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image
          source={leftImageSource ? leftImageSource : Images.woofTagIcon1}
          style={styles.iconStyle}
        />
        <View>
          <Text style={styles.primaryText}>
            <Text style={styles.boldText}>Woof</Text>tag. {name}
          </Text>
          <Text style={styles.secondaryText}>{wooftagName}</Text>
        </View>
      </View>
      <ToggleButton />
    </TouchableOpacity>
  );
};

export default WoofTagCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F2F5FC',
    flexDirection: 'row',
    borderRadius: hp(1),
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    alignItems: 'center',
    paddingRight: wp(8),
    justifyContent: 'space-between',
    marginBottom: hp(1.8),
  },
  leftContainer: {flexDirection: 'row', alignItems: 'center'},
  primaryText: {
    fontWeight: '300',
    fontSize: hp(2),
    lineHeight: hp(2.4),
    marginBottom: 2,
  },
  secondaryText: {
    fontWeight: '300',
    fontSize: hp(1.6),
    lineHeight: hp(2.4),
  },
  boldText: {fontWeight: '700'},
  iconStyle: {
    height: hp(10),
    width: hp(12),
  },
});
