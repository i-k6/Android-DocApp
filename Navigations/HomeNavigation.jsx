//used for home navigation only
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DoctorsList from '../Screen/DoctorsList';
import Home from '../Screen/Home'


const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='doctor-list-screen' component={DoctorsList}/>
    </Stack.Navigator>
  )
}