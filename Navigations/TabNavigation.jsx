import React from 'react'
//used for the tabs navigation menu line home appointment and profile page
import Appointment from '../Screen/Appointment'
import Profile from '../Screen/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
    }}>
        <Tab.Screen
          name='Homenavigator'
          component={HomeNavigation}
          options={({}) => ({
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          })}
          /> 
        <Tab.Screen 
        name='Appointment' 
        component={Appointment}
          options={({}) => ({
            tabBarIcon: ({ color, size }) => (
              <Entypo name="calendar" size={size} color={color} />
            ),
          })}
        />
        <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        })}
        />
    </Tab.Navigator>
  )
}