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

    getStyle(){
        return this.state;
    }
    render(){
        return(null)
    }
}