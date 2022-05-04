import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import PersonalRecord from './PersonalRecord'
import Notice from './Notice'
import Search from './Search'
import Other from './Other'

const Tab = createBottomTabNavigator();

export default NavigateBar = function(navigation) {
  return (

      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor:null,
        tabBarStyle:{backgroundColor: '#005BAC',},
        headerStyle:{backgroundColor: '#005BAC',},
        headerTintColor: '#E2E6F2',
        }}>
          
        <Tab.Screen 
          name="個人借閱" 
          component={PersonalRecord} 
          options={{
            tabBarOptions: { showIcon: true, },
            tabBarIcon:()=>{return(<Ionicons name={'person'} size={25} color={'#E2E6F2'}/>)}
          }}/>

        <Tab.Screen 
          name="通知" 
          component={Notice} 
          options={{
            tabBarOptions: { showIcon: true, },
            tabBarIcon:({})=>{return(<Ionicons name={'notifications'} size={25} color={'#E2E6F2'}/>)}
          }}/>

        <Tab.Screen 
          name="館藏查詢" 
          component={Search} 
          options={{
            tabBarOptions: { showIcon: true},
            tabBarIcon:({})=>{return(<FontAwesome name={'search'} size={25} color={'#E2E6F2'}/>)}
          }}/>

        <Tab.Screen 
          name="其他" 
          component={Other} 
          options={{
            tabBarOptions: { showIcon: true, },
            tabBarIcon:({})=>{return(<Octicons name={'three-bars'} size={25} color={'#E2E6F2'}/>)}
          }}/>
          
      </Tab.Navigator>
  );
}