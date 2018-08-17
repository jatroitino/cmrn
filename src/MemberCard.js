import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class MemberCard extends Component {
  static navigationOptions = {
    title: 'Mi carnet',
  };
    render() {
      return (
        <View style={styles.container}>
            <Image source={{uri:'http://www.clubmascodin.com/app/carnet/10109.jpg'}} style={{width,height,resizeMode:'contain'}}/>
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