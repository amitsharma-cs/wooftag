import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import ToggleButton from '../atom/ToggleButton';

type CardProps = {
  cardHeading?: string;
  cardIcon?: ImageSourcePropType;
  cardIconStyle?: ImageStyle;
  onImagePress?: (event: GestureResponderEvent) => void;
  isToggleRequired?: boolean;
};

const CardHeader: React.FC<CardProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardHeading}>{props.cardHeading}</Text>
      {props.isToggleRequired && <ToggleButton />}

      {props.cardIcon && (
        <TouchableOpacity onPress={props.onImagePress}>
          <Image
            source={props.cardIcon}
            style={props.cardIconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 6,
  },
  cardHeading: {
    fontSize: 24,
    color: '#000832',
    fontWeight: 'bold',
  },
});
