import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Appointments extends Component {
  static navigationOptions = {
    title: 'Nueva citas',
  };
    render() {
      return (
        <View style={styles.container}>
            <Text>Appointments</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingLeft: 15,
      paddingRight: 15
    }
  });