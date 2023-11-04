import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    experience: '10 years',
    imageUri: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    specialty: 'Dermatologist',
    experience: '15 years',
    imageUri: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
  },
];

export default function Profile() {
  const navigation = useNavigation();
  const [appointmentMessage, setAppointmentMessage] = useState('');

  const bookAppointment = (doctor) => {
    setAppointmentMessage(`Appointment booked with Dr. ${doctor.name}`);
    setTimeout(() => {
      setAppointmentMessage('');
    }, 3000);
    navigation.navigate('Appointment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appointmentMessage}>{appointmentMessage}</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.card}>
            <Image
              source={{ uri: doctor.imageUri }}
              style={{ width: 150, height: 150, borderRadius: 75 }}
            />
            <Text style={styles.text}>Name: {doctor.name}</Text>
            <Text style={styles.text}>Specialty: {doctor.specialty}</Text>
            <Text style={styles.text}>Experience: {doctor.experience}</Text>
            <TouchableOpacity style={styles.button} onPress={() => bookAppointment(doctor)}>
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

//cSS 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    margin: 10,
    width: Dimensions.get('screen').width * 0.87,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#578fbd',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appointmentMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
  },
});
