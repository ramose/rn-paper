import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Ticket = props => {
  return (
    <View style={styles.root}>
      <Text>{props.width}</Text>
      <View style={[styles.ticket, {width: props.width}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  ticket: {
    height: 80,
    backgroundColor: 'purple',
  },
});
export default Ticket;
