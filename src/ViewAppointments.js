import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ViewAppointments extends Component {
  static navigationOptions = {
    title: 'Mis citas',
  };
    render() {
      return (
        <View style={styles.container}>
            <Text>ViewAppointments</Text>
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