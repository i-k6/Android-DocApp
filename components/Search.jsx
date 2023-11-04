import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Search({setSearchText}) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 0.5,
          borderRadius: 8,
          padding: 6,
          borderColor: '#60708a',
        }}
      >
        <MaterialIcons name="search" size={24} color="#74a0e8" />
        <TextInput
          placeholder="Search"
          value={searchInput}
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{ flex: 1, padding: 0 }}
        />
      </View>
    </View>
  );
}
