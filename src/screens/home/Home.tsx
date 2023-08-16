import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import Images from '../../assets/images/Images';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/molecule/Button';
import PetList from '../../components/molecule/PetList';
import {wooftagList} from '../../assets/dummyData/Index';
import RouteNames from '../../navigation/RouteNames';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import FreeLimitReachModal from '../../modals/FreeLimitReachModal';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Colors from '../../assets/colors/Colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader onPressRight={() => {}} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.paddingView}>
            <View style={styles.topView}>
              <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                showPagination
                paginationActiveColor={Colors.white}>
                <View style={styles.firstSwiperView}>
                  <Image style={styles.image_add} source={Images.pet1} />
                </View>

                <View style={styles.firstSwiperView}>
                  <Image style={styles.image_add} source={Images.pet2} />
                </View>

                <View style={styles.firstSwiperView}>
                  <Image style={styles.image_add} source={Images.pet1} />
                </View>
              </SwiperFlatList>
            </View>
            <View style={styles.textView}>
              <Text style={styles.primaryText}>Your Pets</Text>
              <Text style={styles.secondaryText}>
                All Your Pets In One Place
              </Text>
            </View>
          </View>
          <View style={styles.flatlistViewStyle}>
            <PetList
              data={wooftagList}
              onPress={() =>
                navigation.navigate(RouteNames.petProfilePage.name)
              }
              onPressAdd={() =>
                navigation.navigate(RouteNames.createPetPage.name)
              }
            />
          </View>
          <View style={styles.addBtnView}>
            <Button
              text={wooftagList.length ? 'Add A New Pet' : 'Add Your First Pet'}
              imageOnRight={Images.plus_icon}
              rightIconStyle={styles.buttonIconStyle}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </ScrollView>
      <FreeLimitReachModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onCancelPress={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
