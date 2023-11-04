import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const dummyUserProfile = {
  name: 'Mukesh Kumar',
  email: 'Mks@example.com',
  phoneNumber: '555-123-4567',
  location: 'New York, Bharat',
  profileImageUri: 'https://i.pinimg.com/736x/65/e9/c8/65e9c8c372e43f4e7efc450fe53a61a2.jpg',
};

export default function UserProfile() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: dummyUserProfile.profileImageUri }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{dummyUserProfile.name}</Text>
      <Text style={styles.text}>Email: {dummyUserProfile.email}</Text>
      <Text style={styles.text}>Phone Number: {dummyUserProfile.phoneNumber}</Text>
      <Text style={styles.text}>Location: {dummyUserProfile.location}</Text>
    </View>
  );
}

//css
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    margin: 25,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});
