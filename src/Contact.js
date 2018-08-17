import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Contact extends Component {
  static navigationOptions = {
    title: 'Contacto',
    tabBarIcon: <Icon size={24} color="white" name="cellphone-sound" />

  };
    render() {
      return (
        <View style={styles.container}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Puedes encontrarnos en:</Text>
            <Text>C/Diseño, 4. Nave 8.</Text>
            <Text>Mairena del Aljarafe</Text>
            <Text>41927</Text>
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:40}}>Teléfono: </Text>
            <Text>955 089393</Text>
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:40}}>Correo electrónico:</Text>
            <Text>sociosmascodin@gmail.com</Text>
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:40}}>Horario de apertura:</Text>
            <Text>Lunes: 10:00-14:00 // 17:00-21:00</Text>
            <Text>Martes: 10:00-14:00 // 17:00-21:00</Text>
            <Text>Mieércoles: 10:00-14:00 // 17:00-21:00</Text>
            <Text>Jueves: 10:00-14:00 // 17:00-21:00</Text>
            <Text>Viernes: 10:00-14:00 // 17:00-21:00</Text>
            <Text>Sábado: 10:00-14:00 </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingLeft: 15,
      paddingRight: 15
    }
  });