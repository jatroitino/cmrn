import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Renew extends Component {
  static navigationOptions = {
    title: 'Renovación',
  };
    render() {
      return (
        <View style={styles.container}>
            <Text>Renew</Text>
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