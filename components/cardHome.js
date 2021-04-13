import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, List, Paragraph, Subheading, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PropTypes from 'prop-types';

const CardHome = props => {
  const LeftPanel = () => {
    return (
      <View style={styles.leftPanel}>
        <View>
          <Paragraph>{props.date}</Paragraph>
          <View style={{flexDirection: 'row'}}>
            <Icon name="clock-o" size={20} color="#cecece" />
            <Text style={{marginLeft: 10}}>{props.time}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Card
      style={[
        styles.root,
        {backgroundColor: props.status === 2 ? '#cecece' : 'white'},
      ]}>
      <View style={{flexDirection: 'row'}}>
        <LeftPanel />
        <View
          style={{
            width: 1,
            backgroundColor: '#cecece',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <View style={styles.rightPanel}>
          <Subheading>{props.route}</Subheading>
        </View>

        <View style={{flex: 1}} />
        <View
          style={{
            alignSelf: 'center',
            marginRight: 10,
          }}>
          {props.status === 2 && <Icon name="check" color="green" size={20} />}
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
    // backgroundColor: '#5C9F40',
    padding: 10,
    width: 100,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  rightPanel: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 20,
  },
});

export default CardHome;

CardHome.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  route: PropTypes.string,
  detail: PropTypes.string,
  status: PropTypes.number,
};
