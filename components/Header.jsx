import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigation = useNavigation();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const goToUserProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <TouchableOpacity onPress={goToUserProfile}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 50,
            }}
          />
          <View>
            <Text>Hello!</Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              {user.fullName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
