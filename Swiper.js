import React, { useState } from 'react';
import {
  View,
  Image,
} from 'react-native';

// npm i react-native-swiper
import Swiper from 'react-native-swiper';

export default function App() {
  
  const [userData] = useState([
    {
      img: 'https://randomuser.me/api/portraits/men/81.jpg',
      name: 'Maurice Davis',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/20.jpg',
      name: 'Bernice Alvarez',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/19.jpg',
      name: 'Jennie Barnett',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/55.jpg',
      name: 'Matthew Wagner',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/71.jpg',
      name: 'Christian Wilson',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/21.jpg',
      name: 'Sophia Fernandez',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/42.jpg',
      name: 'Sylvia Lynch',
    },
  ]);
  
  return (
    <View>
      <Swiper showsButtons={true} style={{ height: 300 }}>
        {userData.map((user) => (
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 300, height: 300 }}
              source={{ uri: user.img }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  )
}