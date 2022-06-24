import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

// npm install react-native-snap-carousel
import Carousel from 'react-native-snap-carousel';

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
      <Carousel
        data={userData}
        layout='default'
        loop={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                Alert.alert(item.name);
              }}
            >
              <View style={styles.carouselItem}>
                <Image
                  style={{ width: 300, height: 300, borderRadius: 10 }}
                  source={{ uri: item.img }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        sliderWidth={1}
        itemWidth={300}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselItem: {
    width: 300,
    height: 300,
    position: 'relative',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
})