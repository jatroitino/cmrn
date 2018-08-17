import React from 'react'
import {createDrawerNavigator, NavigationActions} from 'react-navigation'

import Welcome from '../Welcome'
import Member from '../Member'
import MemberCard from '../MemberCard'
import Pets from '../Pets'
import ViewAppointments from '../ViewAppointments'
import Appointments from '../Appointments'
import Renew from '../Renew'

const PrivateDrawerStack = createDrawerNavigator({
    welcome: {screen: Welcome},
    member: {screen: Member},
    memberCard: {screen: MemberCard},
    pets: {screen: Pets},
    viewAppointments: {screen: ViewAppointments},
    appointments: {screen: Appointments},
    renew: {screen: Renew},
},{
    initialRouteName: 'welcome',
    
})


export default PrivateDrawerStack;