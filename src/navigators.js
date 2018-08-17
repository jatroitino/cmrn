import React from 'react'
import {
    View
} from 'react-native'
import { 
    createStackNavigator, 
    SwitchNavigator,
    NavigationActions 
} from 'react-navigation'

import PublicStack from './stacks/PublicStack'
import PrivateStack from './stacks/PrivateStack'


const Stack = SwitchNavigator({
    publicStack: {screen: PublicStack},
    privateStack: {screen: PrivateStack},
},{
    initialRouteName: 'publicStack',
    headerMode: 'none',
    headerLayoutPreset: 'center',
    
})

export default Stack;