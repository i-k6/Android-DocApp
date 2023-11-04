import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import app from './../assets/Welcome.jpg'
import SignInWithOAuth from '../components/SignInWithOAuth'
export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
        <Image source={app}
        style={styles.appImage}
        />

        <View style = {{backgroundColor:'#fff',
          padding: 25,
          alignItems: 'center',
          marginTop: -50,
          borderRadius: 30,
          elevation: 3,
        }}>
          <Text style={styles.heading}>DocApp</Text>
          <Text style={styles.heading}>Book Your Appointment</Text>
          <Text style={{textAlign:'center',marginTop:5}}>An application to book apppointments of specialist doctors</Text>
          <SignInWithOAuth />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    appImage: {
        width: 300,
        height: 450,
        objectFit: 'contain',
        marginTop: 75,
        borderRadius: 50,
    },

    heading: {
      fontSize: 25,
      fontWeight: 'bold',
    },

})