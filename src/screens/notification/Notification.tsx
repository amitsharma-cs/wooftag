import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {styles} from './Styles';
import NotificationButton from '../../components/atom/NotificationButton';
import Images from '../../assets/images/Images';
import AuthHeader from '../../components/molecule/headers/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../../navigation/RouteNames';
import DeleteAllModal from '../../modals/DeleteAllModal';

interface Item {
  id: string;
  text: string;
}

interface RenderItemProps {
  item: Item;
}

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState<Item[]>([
    {id: '1', text: 'Someone scanned Bellos Wooftag'},
    {id: '2', text: 'Someone scanned Bellos Wooftag'},
    {id: '3', text: 'Someone scanned Bellos Wooftag'},
    {id: '4', text: 'Someone scanned Bellos Wooftag'},
    {id: '5', text: 'Someone scanned Bellos Wooftag'},
  ]);

  const [deleteAllModal, setDeleteAllModal] = useState(false);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    item: Item,
  ) => {
    return (
      <TouchableOpacity
        onPress={() => handleDeleteItem(item.id)}
        style={styles.deleteBtnView}>
        <ImageBackground
          source={Images.NotifyPage.delete_bg}
          style={styles.imgView}
          imageStyle={styles.imgStyle}>
          <Text style={styles.deleteText}>Delete</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderItem: React.FC<RenderItemProps> = ({item}) => {
    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, item)
        }>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteNames.locationMapPage.name)}>
          <View style={styles.item}>
            <NotificationButton label={item.text} subLabel="1 minute ago" />
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  const handleDeleteItem = (itemId: string) => {
    const updatedData = data.filter(item => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader onPressRight={() => {}} />
      <View style={styles.container}>
        <Text style={styles.primaryText}>Alerts</Text>
        <TouchableOpacity onPress={() => setDeleteAllModal(true)}>
          <Text style={styles.secondaryText}>Delete All Notifications</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.flatView}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <DeleteAllModal
          visible={deleteAllModal}
          onConfirmPress={() => setDeleteAllModal(false)}
          onCancelPress={() => setDeleteAllModal(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
