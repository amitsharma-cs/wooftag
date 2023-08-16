import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthHeader from '../../../components/molecule/headers/AuthHeader';
import SubHeader from '../../../components/molecule/headers/SubHeader';
import TextField from '../../../components/molecule/TextField';
import DatePickerField from '../../../components/molecule/DatePickerField';
import DescriptionField from '../../../components/molecule/DescriptionField';
import HalfButton from '../../../components/molecule/HalfButton';
import DatePicker from 'react-native-date-picker';
import Button from '../../../components/molecule/Button';
import BottomView from '../../../components/atom/BottomView';
import RouteNames from '../../../navigation/RouteNames';

const PetDetails = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AuthHeader
          onPressBack={() => navigation.goBack()}
          title="About Bruno"
        />
        <SubHeader cameraIcon />
        <View style={styles.container}>
          <TextField label="Pet Name" placeholder="Name of your Pet" />
          <TextField label="Pet Breed" placeholder="e.g. German Shepard" />
          <TextField
            label="Your pet's color"
            placeholder="e.g. Black with brown spots"
          />
          <DatePickerField
            label="Birthday of your pet"
            placeholder="01/01/2023"
            value={date.toString()}
            onPressField={() => setOpen(true)}
          />
          <TextField label="Your pet's weight" placeholder="4" />
          <DescriptionField
            label="Other infos about your pet"
            placeholder="e.g. Bello has a white tail tip and wags his tail a lot"
          />
          <View style={styles.buttonContainer}>
            <HalfButton text="Male" background />
            <HalfButton text="Female" background={false} />
          </View>
        </View>
        <DatePicker
          mode="date"
          date={date}
          open={open}
          modal
          onConfirm={value => {
            setOpen(false);
            setDate(value);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </KeyboardAwareScrollView>
      <BottomView>
        <Button
          text="Continue"
          onPress={() => navigation.navigate(RouteNames.petProfilePage.name)}
        />
      </BottomView>
    </SafeAreaView>
  );
};

export default PetDetails;
