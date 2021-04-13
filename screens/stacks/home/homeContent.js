import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  TextInput,
  Text,
  Button,
  Appbar,
  Card,
  List,
  Colors,
} from 'react-native-paper';
import CardHome from '../../../components/cardHome';

const HomeContentScreen = () => {
  const navigation = useNavigation();

  function content(){
    var cards = []
    // for(let i=0; i<10; i++){
    //     cards.push(<CardHome color={Colors.blue500} date="5/4/2021" time="17:00" route="Hotel - Airport" />)
    // }

    cards.push(<CardHome color={Colors.blue500} date="5/4/2021" time="17:00" route="Hotel - Airport" />)
    cards.push(<CardHome color={Colors.blue500} date="18/4/2021" time="8:30" route="Kuta - Airport" status={2}/>)
    
    return cards
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home</Text>
      <ScrollView>
        
        {content()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 10,
    paddingRight:10,
    paddingTop:10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeContentScreen;
