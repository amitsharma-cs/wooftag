import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import BottomView from '../../components/atom/BottomView';
import Button from '../../components/molecule/Button';
import Images from '../../assets/images/Images';
import {wooftagList} from '../../assets/dummyData/Index';
import AssignTagModal from '../../modals/AssignTagModal';
import RouteNames from '../../navigation/RouteNames';
import SubHeader from '../../components/molecule/headers/SubHeader';
import TextField from '../../components/molecule/TextField';

const WoofTagNaming = () => {
  const navigation = useNavigation();
  const existingPet = wooftagList;
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader onPressRight={() => {}} rightIcon={Images.delete_icon} />
      <ScrollView>
        <SubHeader
          centerImage={Images.woofTagIcon2}
          centerImageStyle={styles.container}
        />
        <View style={styles.container}>
          <Text style={styles.headingText}>Name This Wooftag</Text>
          <Text style={styles.descriptionText}>
            Give your Wooftag a unique name so you can identify it later
          </Text>
          <TextField
            label="Name Your Wooftag"
            placeholder="e.g. Bellos Green Harness"
          />
          <Text style={[styles.italicStyle]}>
            For Example: Bellos Green Harness
          </Text>
        </View>
      </ScrollView>
      <BottomView>
        <Button
          text="Save & Back to Home"
          onPress={() => navigation.navigate(RouteNames.homePage.name)}
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

export default WoofTagNaming;
