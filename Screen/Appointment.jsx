import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AppointmentItem = ({ appointment }) => (
  <View style={styles.appointmentItem}>
    <Text style={styles.doctorName}>{appointment.doctorName}</Text>
    <Text style={styles.specialty}>{appointment.specialty}</Text>
    <Text style={styles.date}>{`Date: ${appointment.date}`}</Text>
    <Text style={styles.time}>{`Time: ${appointment.time}`}</Text>
    <Text style={styles.location}>{`Location: ${appointment.location}`}</Text>
  </View>
);

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. John Smith',
      specialty: 'Cardiologist',
      date: '2023-11-10',
      time: '10:00 AM',
      location: 'Cardio Clinic',
    },
    {
      id: 2,
      doctorName: 'Dr. Jane Doe',
      specialty: 'Dermatologist',
      date: '2023-11-15',
      time: '2:30 PM',
      location: 'Skin Health Clinic',
    },
  ];
  
  return (
    <FlatList
      data={appointments}
      keyExtractor={(appointment) => appointment.id.toString()}
      renderItem={({ item }) => <AppointmentItem appointment={item} />}
    />
  );
}

//CSS
const styles = StyleSheet.create({
  appointmentItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 3,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 16,
    color: '#555',
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
});
