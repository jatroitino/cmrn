import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet, 
    View, 
    TextInput, 
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Icon size={26} color="white" name={this.props.icon} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          keyboardType={this.props.keyboardType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(0, 146, 223, 0.6)',
    width: DEVICE_WIDTH - 40,
    height: 50,
    marginHorizontal: 20,
    paddingLeft: 50,
    borderRadius: 20,
    color: 'white',
    marginBottom: 20,
    fontSize: 16
  },
  inputWrapper: {

  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 30,
    height: 30,
    left: 35,
    top: 9,
  },
});