import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import MainStyles from './MainStyles'

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            socio: '',
            password: ''
        }
    }
    render(){
        return(
            <View style={{flex: 1, paddingLeft:15,paddingRight:15}}>
                <Text>Login</Text>
                <TextInput
                    placeholder='Número de Socio'
                    style={styles.inputtext}
                    onChangeText={(socio) => this.setState({socio})}
                    value={this.state.socio}
                    keyboardType='numeric'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    placeholder='Contraseña'
                    style={styles.inputtext}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                />
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button2}>
                    <Text style={styles.remember}>¿Olvidó su contraseña?</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputtext: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width
    },
    button: {
        backgroundColor: MainStyles.color1,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15
    },
    buttonText: {
       textAlign: 'center',
       color: 'white'
    },
    button2: {
        paddingTop: 15,
        paddingBottom: 15
    },
    remember: {
        textAlign: 'center',
        color: MainStyles.color1
     },
 
  });