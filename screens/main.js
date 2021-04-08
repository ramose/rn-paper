import React, {useState} from 'react';
import {BottomNavigation, Text, Button} from 'react-native-paper';
import {View} from 'react-native';
import HomeScreen from './stacks/home/homeStack';
import ProfileStackScreen from './stacks/profile/profileStack';
import HomeStackScreen from './stacks/home/homeStack';
import HomeContentScreen from './stacks/home/homeContent';


// const MusicRoute = (props) => <HomeScreen2 nav={props.navigation}/>;

const AlbumsRoute = (navigation) => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MainScreen = (props) => {
  const [index, setIndex] = useState(3);
  const [routes] = useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'jobs', title: 'Jobs', icon: 'check'},
    {key: 'saldo', title: 'Saldo', icon: 'clipboard-list-outline'},
    {key: 'profile', title: 'Profil', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeContentScreen,
    jobs: AlbumsRoute,
    saldo: RecentsRoute,
    profile: ProfileStackScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainScreen;
