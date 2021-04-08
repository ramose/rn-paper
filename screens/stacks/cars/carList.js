import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import {Button, List, Appbar} from 'react-native-paper';

// export default class Car extends Component{
//     // brand = ''
//     // name = ''
//     // year = 0
//     constructor(brand, name, year) {
//         this.brand = 'brand';
//         this.name = 'name';
//         this.year = 0;
//     }
// }

const CarList = ({navigation}) => {
  const cars = [
    {
      id: 0,
      brand: 'Toyota',
      year: 1988,
      cap: 45,
      cyl: 4,
      type: 'ABC',
      name: 'Mobil Keren',
      trans: 'Auto',
      ktp: '0909898787676',
    },
    // Car('Toyota', 'GT 100', 1988),
    // Car(1,'Suzuki', 'Forsa', 2000),
    // Car(2, 'Daihatsu', 'GT 2000', 2012),
  ];

  return (
    <View>
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Text style={{color: 'white'}}>Daftar Mobil</Text>
        <View style={{flex: 1}} />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate('CarAdd')}
        />
      </Appbar>
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <List.Item title={item.name} description={item.ktp} onPress={
              () => navigation.navigate('CarDetail', {item:item})
          } />;
        }}
      />
    </View>
  );
};

export default CarList;
