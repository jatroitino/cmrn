import React from 'react'
import {
    View
} from 'react-native'
import {
    createStackNavigator,
    NavigationActions
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import PrivateDrawerStack from './PrivateDrawerStack'

const PrivateStack = createStackNavigator({
    privateDrawerStack: {screen: PrivateDrawerStack},
},{
    initialRouteName: 'privateDrawerStack',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#4B77BE',
        },
        headerLeftContainerStyle: {
            paddingLeft: 10
        },
        title: 'Home',
        headerTintColor: '#ffffff',
        headerLeft: 
            <View>
                <Icon 
                    name="bars" 
                    size={30}
                    color='white'
                    onPress={() => {
                        navigation.toggleDrawer();
                    }} />
            </View>
    })
});


export default PrivateStack;