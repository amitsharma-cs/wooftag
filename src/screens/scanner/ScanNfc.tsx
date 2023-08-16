import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets/images/Images';
import Button from '../../components/molecule/Button';
import NoOriginalModal from '../../modals/NoOriginalModal';

const ScanNfcScreen = () => {
  const navigation = useNavigation();
  const [noOriginalModal, setNoOriginalModal] = useState(false);

  const handleActivationClick = () => {
    setNoOriginalModal(true);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.NFCImagecontainer}>
        <Image
          source={Images.ScannerPage.instructImg_iOS}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.stepText}>
          <Text style={styles.boldText}>Step 1:</Text> Tap the Button Below To
          Start
        </Text>
        <Text style={styles.stepText}>
          <Text style={styles.boldText}>Step 2:</Text> Hold your Wooftag to the
        </Text>
        <Text style={styles.stepText}>very top of your iPhone.</Text>
      </View>
      <Button text="Start Activation" onPress={handleActivationClick} />
      <Text style={styles.buyPetText}>Or buy one now</Text>
      <NoOriginalModal
        visible={noOriginalModal}
        onConfirmPress={() => setNoOriginalModal(false)}
        onCancelPress={() => setNoOriginalModal(false)}
      />
    </SafeAreaView>
  );
};

export default ScanNfcScreen;
