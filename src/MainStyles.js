import React, {Component} from 'react'
import {
    Text
} from 'react-native'

export default class MainStyles extends Component{
    constructor(props){
        super(props)

        this.state = {
            color1: 'green',
            color2: 'red'
        }
    }
    componentDidMount(){
        fetch('http://citasveterinarias.com/api/style')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                color1: responseJson.Style.color1,
                color2: responseJson.Style.color2
            }, function(){
            });
        })
        .catch((error) =>{
            console.log(error);
        });
    }
    getStyle(){
        return this.state;
    }
    render(){
        return(
            {{this.state}}
        )
    }
}