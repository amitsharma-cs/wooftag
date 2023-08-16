import {View} from 'react-native';
import React from 'react';
import ModalSlider from '../components/atom/ModalSlider';
import Images from '../assets/images/Images';
import LostProfileModalHeader from '../components/molecule/LostProfileModalHeader';
import ProfileButton from '../components/molecule/buttons/ProfileButton';
import {translate} from '../translations/translate';

type Props = {
  visible?: boolean;
  closeModal: () => void;
  onPressDelete?: () => void;
};
const ProfileModal: React.FC<Props> = ({
  visible,
  closeModal,
  onPressDelete,
}) => {
  return (
    <ModalSlider visible={visible} closeModal={closeModal}>
      <LostProfileModalHeader lost={true} />
      <View>
        <ProfileButton
          text={`${translate('your')} Woof`}
          subText="Tag's."
          leftIconSource={Images.info}
        />
        <ProfileButton
          text={`${translate('activate')} Woof`}
          subText="Tag."
          leftIconSource={Images.info}
        />
        <ProfileButton
          text={translate('deletePetProfile')}
          leftIconSource={Images.info}
          onPress={onPressDelete}
        />
      </View>
    </ModalSlider>
  );
};

export default ProfileModal;
