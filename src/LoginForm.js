import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import UserInput from './UserInput';

import usernameImg from './images/username.png';
import passwordImg from './images/password.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press: false,
    };
  }


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          icon={'account-outline'}
          placeholder="NÚMERO DE SOCIO"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          keyboardType={'numeric'}
        />
        <UserInput
          icon={'lock-outline'}
          secureTextEntry
          placeholder="CONTRASEÑA"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType={'default'}
        />
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});