import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import Home from '../Home'
import Login from '../Login'
import Contact from '../Contact' 
import FollowUs from '../FollowUs'

const PublicStack = createMaterialBottomTabNavigator({
    home: {screen: Home},
    login: {screen: Login},
    contact: {screen: Contact},
    followUs: {screen: FollowUs}
},{
    initialRouteName: 'home',
    header: null,
    headerMode: 'none',
    barStyle:{backgroundColor:'#4B77BE'}
})

export default PublicStack;