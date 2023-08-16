import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import Images from '../../assets/images/Images';
import BottomView from '../../components/atom/BottomView';
import Button from '../../components/molecule/Button';
import DeleteTagModal from '../../modals/DeleteTagModal';
import ToggleButton from '../../components/atom/ToggleButton';
import TextField from '../../components/molecule/TextField';
import SubHeader from '../../components/molecule/headers/SubHeader';
import WoofTagModal from '../../modals/WoofTagModal';
import {useNavigation} from '@react-navigation/native';

const WoofTag = () => {
  const navigation = useNavigation();
  const [deleteModal, setDeleteModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        onPressBack={() => navigation.goBack()}
        rightIcon={Images.dog2}
        onPressRight={() => {}}
        rightIconStyle={styles.headerRightIconStylee}
      />
      <SubHeader
        centerImage={Images.woofTagIcon2}
        centerImageStyle={styles.container}
      />
      <View style={styles.container}>
        <Text style={styles.primaryText}>Bellos Green Harness</Text>
        <View style={styles.middleView}>
          <TouchableOpacity onPress={() => setInfoModal(true)}>
            <Image source={Images.round_info} style={styles.infoIconStyle} />
          </TouchableOpacity>
          <View>
            <Text style={styles.textStyle}>
              Woof<Text style={styles.thinText}>tag. </Text> ON
            </Text>
            <Text style={styles.subTextStyle}>Turn it On & OFF</Text>
          </View>
          <ToggleButton />
          <TouchableOpacity
            style={styles.deleteBtnStyle}
            onPress={() => setDeleteModal(true)}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
        <TextField
          label={'Name Your Wooftag'}
          placeholder={'e.g Bellos Green Harness'}
        />
      </View>
      <BottomView>
        <Button text="Save & Back to Home" />
      </BottomView>
      <DeleteTagModal
        visible={deleteModal}
        onCancelPress={() => setDeleteModal(false)}
      />
      <WoofTagModal
        visible={infoModal}
        closeModal={() => setInfoModal(false)}
      />
    </SafeAreaView>
  );
};

export default WoofTag;
