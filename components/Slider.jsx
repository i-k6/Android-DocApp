import { View,FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import Categories from './Categories'
import Hospital from './Hospital'

export default function Slider() {
    
    const sliderList1 =[
        {
            id :1,
            name: 'Slider 1',
            imageUrl: 'https://cdn.vectorstock.com/i/1000x1000/81/03/book-doctor-appointment-online-flat-banner-vector-45248103.webp'
        },

        {
            id :2,
            name: 'Slider 2',
            imageUrl: 'https://elements-cover-images-0.imgix.net/72a0929b-9718-4a1a-b882-76cb40c5103b?auto=compress%2Cformat&w=1370&fit=max&s=c116ea5250014a8bb6833425d3f23de4'
        }
    ]
    
  return (
    <View style={{
        marginTop:10,
    }}>
      <FlatList 
        data={sliderList1}
        horizontal={true}
        renderItem={({item}) => (
            <Image source={{uri:item.imageUrl}}
            style={{
                width:Dimensions.get('screen').width*0.87,
                height:180,
                margin:3,
                borderRadius:8
            }}
            />
        )}
      />
      <Categories />
      <Hospital />
    </View>
  )
}