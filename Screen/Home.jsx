import { View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <View
    style={{
    padding:20,
    marginTop:10,
  }}>
      <Header />
      <Search setSearchText={(value) => console.log(value)} />
      <Slider />
  </View>
  )
}