import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableHighlight,
    ImageBackground,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonSubmit from './ButtonSubmit'

import LoginForm from './LoginForm'
import bgSrc from './images/wallpaper.jpg'
import logoImg from './images/logo.png';

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
    static navigationOptions = {
        title: 'Acceso socios',
        tabBarIcon: <Icon size={24} color="white" name="login" />
      };
    constructor(props){
        super(props)

        this.state = {
            socio: '',
            password: ''
        }
    }
    render(){
        return(
          <View style={styles.container}>
            <ImageBackground style={styles.picture} source={bgSrc}>
                <View style={styles.container2}>
                    <Image source={logoImg} style={styles.image} />
                </View>
                <LoginForm {...this.props}/>
                <ButtonSubmit 
                    {...this.props}
                />
            </ImageBackground>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4F1FE',
      },
      picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
      },
      container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 275,
        height: 90,
      }
  });