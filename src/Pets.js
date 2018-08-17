import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Pets extends Component {
  static navigationOptions = {
    title: 'Mis mascotas',
  };
    render() {
      return (
        <View style={styles.container}>
            <Text>Pets</Text>
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