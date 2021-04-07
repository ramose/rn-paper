import React, {useState} from 'react';
import {BottomNavigation, Text, Button} from 'react-native-paper';
import {View} from 'react-native';
import HomeScreen from './stacks/home/homeStack';

// const MusicRoute = (props) => <HomeScreen2 nav={props.navigation}/>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MainScreen = props => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'jobs', title: 'Jobs', icon: 'check'},
    {key: 'saldo', title: 'Saldo', icon: 'clipboard-list-outline'},
    {key: 'profile', title: 'Profil', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    jobs: AlbumsRoute,
    saldo: RecentsRoute,
    profile: RecentsRoute,
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
