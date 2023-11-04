import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Hospital() {

    const sliderList =[
        {
            id :1,
            name: 'Slider 1',
            imageUrl: 'https://sravanihospitals.com/wp-content/uploads/2023/04/Sravani-Hospitals-682x1024.jpg'
        },

        {
            id :2,
            name: 'Slider 2',
            imageUrl: 'https://www.shutterstock.com/image-photo/modern-hospital-style-building-260nw-212251981.jpg'
        }
    ]
  return (
    <View>
      <Text style={{
            padding:10,
            fontWeight: 'bold',
            fontSize:20,
            marginTop:5
        }}>
            Hospitals
        </Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        renderItem={({item}) => (
            <Image source={{uri:item.imageUrl}}
            style={{
                width:Dimensions.get('screen').width*0.87,
                height:160,
                margin:3,
                borderRadius:8
            }}
            />
        )}
      />
    </View>
  )
}