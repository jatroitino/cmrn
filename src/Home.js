import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from './Slider'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Inicio',
    headerMode: 'none',
    header: null,
    tabBarIcon: <Icon size={24} color="white" name="home" />
  };
    render() {
      return (
        <View  style={styles.container}>
          <Slider />
          <Text style={{flex: 1, paddingTop:40,textAlign:'center',fontSize:18}}>Club Mascodín ha sido creado para aquellas personas que consideran que su animal de compañía no es una simple mascota, sino que forma parte de la unidad familiar, que siente, que sufre, que comparte nuestras alegrías y penas junto a nosotros. La gran necesidad y gran demanda por parte de nuestros socios, reivindicando la igualdad de derechos entre mascotas y humanos, nos llevó a fundar nuestro club, con la finalizad de ofrecer una sanidad gratuita, profesional, dedicada, por y para ellos.</Text>
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