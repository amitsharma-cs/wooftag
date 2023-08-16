import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProfileImage from './ProfileImage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../assets/sizes/Sizes';
import Images from '../../assets/images/Images';
import {I_Pet_List} from '../../interfaces/Index';

type Props = {
  data: I_Pet_List[];
  onPress: () => void;
  onPressAdd?: () => void;
};
const PetList: React.FC<Props> = ({data, onPress, onPressAdd}) => {
  const getBackgroundImage = (index: number) => {
    const source = [Images.theme1, Images.theme2, Images.theme3];
    return source[index % source.length];
  };

  const renderItem = (item: I_Pet_List, index: number) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={getBackgroundImage(index)}
          style={[styles.container]}>
          <ProfileImage
            ellipse={true}
            source={item.image}
            imageStyle={styles.imageStyle}
            ellipseStyle={styles.ellipseStyle}
          />
          <Text style={styles.textStyle}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const footerComponent = () => {
    return (
      <TouchableOpacity onPress={onPressAdd}>
        <Image source={Images.add_pet_bg} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => renderItem(item, index)}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={footerComponent}
      style={styles.flatlistStyle}
    />
  );
};

export default PetList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: hp(2.3),
    marginRight: wp(5),
    borderRadius: hp(2),
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    marginBottom: 5,
  },
  imageStyle: {
    height: hp(14),
    width: hp(14),
  },
  ellipseStyle: {
    right: hp(0.8),
    bottom: hp(0.8),
  },
  textStyle: {
    fontSize: hp(1.8),
    color: '#000832',
    fontWeight: '700',
    lineHeight: hp(4),
  },
  flatlistStyle: {
    paddingHorizontal: wp(5.5),
  },
});
