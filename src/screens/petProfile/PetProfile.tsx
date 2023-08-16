import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../assets/images/Images';
import BoxView from '../../components/molecule/BoxView';
import CardHeader from '../../components/molecule/CardHeader';
import CustomBackgroundImage from '../../components/molecule/CustomBackgroundImage';
import InformationCard from '../../components/molecule/InformationCard';
import TextView from '../../components/molecule/TextView';
import {styles} from './Styles';
import OptionContainer from '../../components/molecule/OptionContainer';
import Button from '../../components/molecule/Button';
import ProfileHeader from '../../components/molecule/headers/ProfileHeader';
import {useNavigation} from '@react-navigation/native';
import ToggleButton from '../../components/atom/ToggleButton';
import ProfileModal from '../../modals/ProfileModal';
import DeletePetModal from '../../modals/DeletePetModal';
import BottomView from '../../components/atom/BottomView';
import RouteNames from '../../navigation/RouteNames';

const PetProfile = () => {
  const navigation = useNavigation();
  const [lost, setLost] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader onPressBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <View>
            <CardHeader
              onImagePress={() => {
                navigation.navigate(RouteNames.petDetails.name);
              }}
              cardHeading="Pet Name"
              cardIcon={Images.edit_button_icon}
              cardIconStyle={styles.cardIconStyle}
            />
            <TextView textStyle={styles.petBreedStyle}>Pet Breed</TextView>
            <TextView textStyle={styles.secondaryTextStyle}>Color</TextView>
            <TextView textStyle={styles.petDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy sadipscing elitr, sed diam nonumy...
            </TextView>
          </View>
          <View style={styles.petDetailsView}>
            <CustomBackgroundImage
              backgroundIcon={Images.weight_background_icon}
              heading="0 kg"
              headingStyle={styles.headingStyle}
              subHeading="Weight"
              subHeadingStyle={styles.subHeadingStyle}
            />
            <CustomBackgroundImage
              backgroundIcon={Images.gender_Background_icon}
              heading="n.a."
              headingStyle={styles.headingStyle}
              subHeading="Gender"
              subHeadingStyle={styles.subHeadingStyle}
            />
            <CustomBackgroundImage
              backgroundIcon={Images.age_Background_icon}
              heading="0 years"
              headingStyle={styles.headingStyle}
              subHeading="Age"
              subHeadingStyle={styles.subHeadingStyle}
            />
          </View>
          <View style={styles.lineViewStyle} />
          <View style={styles.customPadding}>
            <CardHeader
              onImagePress={() => {
                navigation.navigate(RouteNames.phoneNumberScreen.name);
              }}
              cardHeading="Owner Phone"
              cardIcon={Images.edit_button_icon}
            />
            <BoxView>
              {/* <View style={styles.}> */}
              <InformationCard rightIcon={Images.phone_icon} isToggle={true}>
                <TextView textStyle={styles.cardHeading}>Phone Name</TextView>
                <TextView textStyle={styles.descriptionText}>
                  not specified
                </TextView>
              </InformationCard>
              {/* </View> */}
            </BoxView>
          </View>
          <View style={styles.customPadding}>
            <CardHeader
              onImagePress={() => {
                navigation.navigate(RouteNames.addressScreen.name);
              }}
              cardHeading="Pet Home Address"
              cardIcon={Images.edit_button_icon}
            />
            <BoxView>
              <InformationCard rightIcon={Images.location_icon} isToggle={true}>
                <TextView textStyle={styles.cardHeading}>Pet Home</TextView>
                <TextView textStyle={styles.descriptionText}>Street</TextView>
                <TextView textStyle={styles.descriptionText}>
                  PostCode & City
                </TextView>
                <TextView textStyle={styles.descriptionText}>Country</TextView>
              </InformationCard>
            </BoxView>
          </View>
          <View style={styles.customPadding}>
            <CardHeader
              onImagePress={() => {
                navigation.navigate(RouteNames.petBehaviourScreens.name);
              }}
              isToggleRequired={true}
              cardHeading="Pet Behaviour"
              cardIcon={Images.edit_button_icon}
            />
            <BoxView isChangeBackground>
              <InformationCard rightIcon={Images.pet_icon}>
                <TextView textStyle={styles.cardHeading}>Petnames</TextView>
                <TextView textStyle={styles.descriptionText}>
                  is good with:
                </TextView>
              </InformationCard>
              <OptionContainer title="People:" option="Yes / No" />
              <OptionContainer title="Kids:" option="Yes / No" />
              <OptionContainer title="Dogs:" option="Yes / No" />
              <OptionContainer title="Cats:" option="Yes / No" />
              <OptionContainer title="Additional Information:" />
              <OptionContainer option="n.a." />
            </BoxView>
          </View>
          <View style={styles.customPadding}>
            <CardHeader
              onImagePress={() => {
                navigation.navigate(RouteNames.healthInfoScreen.name);
              }}
              isToggleRequired={true}
              cardHeading="Health Information"
              cardIcon={Images.edit_button_icon}
            />
            <BoxView>
              <InformationCard rightIcon={Images.heartBeat_icon}>
                <TextView textStyle={styles.cardHeading}>Petnames</TextView>
                <TextView textStyle={styles.descriptionText}>
                  health information
                </TextView>
              </InformationCard>
              <OptionContainer title="Allegies:" />
              <OptionContainer option="n.a." />
              <OptionContainer title="Medication required: " />
              <OptionContainer option="n.a." />
              <OptionContainer title="Neutered/Splayed: " option="Yes / No" />
              <OptionContainer title="Additional Information: " />
              <OptionContainer option="n.a." />
            </BoxView>
          </View>
          {/* 8888 */}
          <View style={styles.customPadding}>
            <CardHeader
              onImagePress={() => {
                navigation.navigate(RouteNames.vetRegisteration.name);
              }}
              isToggleRequired={true}
              cardHeading="Vet & Registeration"
              cardIcon={Images.edit_button_icon}
            />
            <BoxView>
              <InformationCard rightIcon={Images.plus_paw_icon}>
                <TextView textStyle={styles.cardHeading}>Dr. Vet One</TextView>
                <TextView textStyle={styles.descriptionText}>Street</TextView>
                <TextView textStyle={styles.descriptionText}>
                  PostCode & City
                </TextView>
                <TextView textStyle={styles.descriptionText}>
                  + 49 1234 567 890
                </TextView>
              </InformationCard>
              <View style={styles.microChipView}>
                <View>
                  <OptionContainer title="Microchip ID:" />
                  <OptionContainer option="n.a." />
                </View>
                <ToggleButton />
              </View>
              <View style={styles.microChipView}>
                <View>
                  <OptionContainer title="Tasso ID (TKN):" />
                  <OptionContainer option="n.a." />
                </View>
                <ToggleButton />
              </View>
              <OptionContainer title="Registered as Findefix?" />
              <OptionContainer option="n.a." />
            </BoxView>
          </View>
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Settings"
          onPress={() => {
            setLost(true);
          }}
          imageOnRight={Images.white_image_paw}
        />
      </BottomView>
      <ProfileModal
        visible={lost}
        closeModal={() => setLost(false)}
        onPressDelete={() => {
          setLost(false);
          setDeleteModal(true);
        }}
      />
      <DeletePetModal
        visible={deleteModal}
        onCancelPress={() => setDeleteModal(false)}
        petName={'Bruno'}
      />
    </SafeAreaView>
  );
};
export default PetProfile;
