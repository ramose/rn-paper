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
    {key: 'music', title: 'Music', icon: 'camera'},
    {key: 'albums', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomeScreen,
    albums: AlbumsRoute,
    recents: RecentsRoute,
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
