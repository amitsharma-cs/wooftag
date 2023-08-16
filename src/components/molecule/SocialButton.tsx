import {
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';

type Props = {
  source?: ImageSourcePropType;
  title?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  iconStyle?: ImageStyle;
};
const SocialButton: React.FC<Props> = ({
  source,
  title,
  onPress,
  containerStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {source && (
        <Image source={source} style={[styles.imageStyle, iconStyle]} />
      )}
      {title && <Text style={styles.titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1cfcf',
    borderRadius: 10,
    padding: 12,
  },
  imageStyle: {
    height: 20,
    width: 20,
    margin: 5,
  },
  titleStyle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
export default SocialButton;
