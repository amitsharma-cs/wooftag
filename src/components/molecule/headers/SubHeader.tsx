import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Images from '../../../assets/images/Images';
import {heightPercentageToDP} from '../../../assets/sizes/Sizes';

type Props = {
  cameraIcon?: boolean;
  conatinerStyle?: ViewStyle;
  centerImageStyle?: ImageStyle;
  title?: string;
  subTitle?: string;
  centerImage?: ImageSourcePropType;
};
const SubHeader: React.FC<Props> = ({
  title,
  subTitle,
  centerImageStyle,
  cameraIcon,
  conatinerStyle,
  centerImage,
}) => {
  return (
    <ImageBackground
      source={Images.background_frame}
      style={[styles.container, conatinerStyle]}>
      {cameraIcon && (
        <TouchableOpacity style={styles.cameraIconStyle}>
          <Image source={Images.camera_icon} />
        </TouchableOpacity>
      )}
      <Image
        source={centerImage ? centerImage : Images.image_logo}
        style={centerImageStyle}
      />
      {title && <Text style={styles.primaryText}>{title}</Text>}
      {subTitle && <Text style={styles.secondaryText}>{subTitle}</Text>}
    </ImageBackground>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: heightPercentageToDP(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIconStyle: {
    position: 'absolute',
    // margin: 20,
    alignSelf: 'flex-end',
    right: 19,
    top: 19,
  },
  primaryText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    color: '#000832',
    marginTop: 6,
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 18,
    color: '#000832',
    marginBottom: 15,
  },
});
