import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const navigation = useNavigation();

  const sliderList2 = [
    {
      id: 1,
      name: 'Cardiologist',
      imageUrl:
        'https://img.freepik.com/free-vector/green-heart-with-cardiograph-element_53876-116868.jpg?t=st=1699029016~exp=1699029616~hmac=623e3b9da25dc364c3fe944f35bc4cc7b38c2a4dc7574316c2f5aecdce71ab85',
    },
    {
      id: 2,
      name: 'Dermatologist',
      imageUrl:
        'https://www.clipartmax.com/png/full/218-2183156_illustration-of-skin-layers-dermatology-logo.png',
    },
    {
      id: 3,
      name: 'Dentist',
      imageUrl:
        'https://i.pinimg.com/originals/9c/87/99/9c879909741ebaa6b7a614071079e542.jpg',
    },
    {
      id: 4,
      name: 'Ophthalmologist',
      imageUrl:
        'https://i.pinimg.com/564x/12/5b/c2/125bc26ef05b54b49462587212927313.jpg',
    },
  ];

  return (
    <View>
      <Text
        style={{
          padding: 5,
          fontWeight: 'bold',
          marginLeft: 5,
        }}
      >
        Doctor Specialities
      </Text>
      <FlatList
        data={sliderList2}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('doctor-list-screen', {
                categoryName: item.name
              })
            }
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 80,
                height: 80,
                alignItems: 'center',
                margin: 10,
                marginTop: 8,
                borderRadius: 100,
                borderColor: '#79ba8a',
                borderWidth: 2,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,
                fontWeight: 'bold',
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
