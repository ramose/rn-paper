import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CardHome = props => {
  const LeftPanel = () => {
    return (
      <View style={styles.leftPanel}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.day, {color: 'white'}]}>5</Text>
            <Text style={{color: 'white', marginLeft: 5}}>April</Text>
          </View>

          <Text style={{color: 'white'}}>2021</Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: 'grey',
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <Icon name="clock-o" size={20} color={Colors.white} />
          <Text style={{marginLeft: 10, color: 'white'}}>09:30</Text>
        </View>
      </View>
    );
  };
  return (
    <Card style={styles.root}>
      <View style={{flexDirection: 'row'}}>
        <LeftPanel />

        <View style={styles.rightPanel}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Hotel to Airport
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 6,
    marginBottom: 6,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  leftPanel: {
    backgroundColor: '#5C9F40',
    padding: 10,
    width: 100,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  rightPanel: {
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardHome;
