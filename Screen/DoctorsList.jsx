import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Profile from '../components/DoctorsProfile/Profile';
export default function DoctorsList() {
  const param = useRoute().params;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
          {param?.categoryName}
        </Text>
      </View>
      <View>
        <Profile />
      </View>
    </ScrollView>
  );
}
