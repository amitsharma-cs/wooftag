import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import BottomView from '../../components/atom/BottomView';
import Button from '../../components/molecule/Button';
import Images from '../../assets/images/Images';
import PetList from '../../components/molecule/PetList';
import {wooftagList} from '../../assets/dummyData/Index';
import AssignTagModal from '../../modals/AssignTagModal';
import RouteNames from '../../navigation/RouteNames';
import {translate} from '../../translations/translate';

const AssignWoofTag = () => {
  const navigation = useNavigation();
  const existingPet = wooftagList;
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader onPressBack={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text>IMG</Text>
          </View>
          <Text style={styles.headingText}>{translate('assign')} Wooftag</Text>
          <Text style={styles.descriptionText}>
            {existingPet.length
              ? 'Would you like to create a new pet or assign this wooftag to an existing pet?'
              : 'Would you like to create a new pet using this Wooftag?'}
          </Text>
          <View style={styles.codeContainer}>
            <Text style={styles.blueText}>
              Wooftag Code: <Text style={styles.codeText}>5s8fh</Text>
            </Text>
          </View>
          {existingPet.length ? (
            <Text style={styles.subHeading}>Assign to existing pet</Text>
          ) : null}
        </View>
        {existingPet.length ? (
          <View style={styles.flatListView}>
            <PetList data={existingPet} onPress={() => setModal(true)} />
          </View>
        ) : null}
      </ScrollView>
      <BottomView>
        <Button
          text="Create a new pet"
          imageOnRight={Images.plus_icon}
          rightIconStyle={styles.btnIcon}
        />
      </BottomView>
      <AssignTagModal
        visible={modal}
        closeModal={() => setModal(false)}
        onCancelPress={() => setModal(false)}
        onConfirmPress={() => {
          setModal(false);
          navigation.navigate(RouteNames.wooftagNamingScreen.name);
        }}
      />
    </SafeAreaView>
  );
};

export default AssignWoofTag;
