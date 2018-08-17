import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableHighlight,
  Linking,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

export default class FollowUs extends Component {
  static navigationOptions = {
    title: 'Síguenos',
    tabBarIcon: <Icon size={24} color="white" name="share-variant" />

  };
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.container1}>
              <TouchableHighlight
                style={{flex:1,border:2,borderColor:'red'}}
                onPress={()=>Linking.openURL('http://www.facebook.com/clubmascodin').catch(err => console.error('An error occurred', err))}
              >
                <View style={{flex:1,alignItems:'center',justifyContent:'center',width}}>
                  <Icon name="facebook-box" size={40} color="#ffffff" />
                  <Text style={styles.texto1}>Ir a Facebook</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.container2}>
            <TouchableHighlight
                style={{flex:1}}
                onPress={()=>Linking.openURL('http://clubmascodin.blogspot.com/').catch(err => console.error('An error occurred', err))}
              >
                <View style={{flex:1,alignItems:'center',justifyContent:'center',width}}>
                  <Icon name="blogger" size={40} color="#4267b2" />
                  <Text style={styles.texto2}>Ir al blog</Text>
                </View>
              </TouchableHighlight>
            </View>
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
    },
    container1: {
      flex:1, 
      justifyContent:'center',
      backgroundColor: '#4267b2',
      width
    },
    container2: {
      flex:1, 
      justifyContent:'center',
      backgroundColor: '#ffffff'
    },
    texto1: {
      color: '#ffffff',
      fontSize: 30
    },
    texto2: {
      color: '#4267b2',
      fontSize: 30
    },
  });