import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import AuthHeader from '../../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import SubHeader from '../../../components/molecule/headers/SubHeader';
import Images from '../../../assets/images/Images';
import BottomView from '../../../components/atom/BottomView';
import Button from '../../../components/molecule/Button';
import RouteNames from '../../../navigation/RouteNames';
import HalfButton from '../../../components/molecule/HalfButton';
import DescriptionField from '../../../components/molecule/DescriptionField';

const PetBehaviourScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => navigation.goBack()}
        title={"Bruno's Behavior"}
        rightIcon={Images.delete_icon}
        onPressRight={() => {}}
      />
      <ScrollView>
        <SubHeader
          centerImage={Images.pet_icon}
          centerImageStyle={styles.dogImageStyle}
          subTitle="Bruno's Behavior"
        />
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            To help others better understand Petname, let them know something
            about the behavior.
          </Text>
          <View style={styles.separatorViewStyle} />
          <Text style={styles.boldText}>Bruno is good...</Text>
          <Text style={styles.behaviorTextStyle}>with People?</Text>
          <View style={styles.buttonContainer}>
            <HalfButton text="Yes" background />
            <HalfButton text="No" />
          </View>
          <View style={styles.separatorViewStyle} />
          <Text style={styles.behaviorTextStyle}>with Kids?</Text>
          <View style={styles.buttonContainer}>
            <HalfButton text="Yes" background />
            <HalfButton text="No" />
          </View>
          <View style={styles.separatorViewStyle} />
          <Text style={styles.behaviorTextStyle}>with Dogs?</Text>
          <View style={styles.buttonContainer}>
            <HalfButton text="Yes" background />
            <HalfButton text="No" />
          </View>
          <View style={styles.separatorViewStyle} />
          <Text style={styles.behaviorTextStyle}>with Cats?</Text>
          <View style={styles.buttonContainer}>
            <HalfButton text="Yes" background />
            <HalfButton text="No" />
          </View>
          <View style={styles.separatorViewStyle} />
          <DescriptionField
            label="Additional informations"
            placeholder="e.g. Bello has a wstrong hunting drive"
          />
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Save Behavior"
          onPress={() => navigation.navigate(RouteNames.petProfilePage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default PetBehaviourScreen;
