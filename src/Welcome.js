import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions} from 'react-navigation'

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'Bienvenido',
  };
    render() {
      return (
        <View style={styles.container}>
            <Text>Welcome</Text>
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