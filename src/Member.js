import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Member extends Component {
  static navigationOptions = {
    title: 'Mis datos',
  };
    render() {
      return (
        <View style={styles.container}>
        <Text>Mis datos</Text>
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




