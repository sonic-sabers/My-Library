import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

// npm i react-native-swipe-list-view
import { SwipeListView } from 'react-native-swipe-list-view';

// npm i react-native-elements
import { Icon } from 'react-native-elements';

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
       <SwipeListView
        data={userData}
        renderItem={(data, rowMap) => (
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert(`Name - ${data.item.name}`);
            }}
          >
            <View
              style={{
                backgroundColor: '#f1f3f6',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 4,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 40, height: 40, borderRadius: 100 }}
                source={{ uri: data.item.img }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '400',
                  fontSize: 16,
                }}
              >
                {data.item.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <View
              style={{
                width: 75,
                height: '100%',
                marginVertical: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('User Info', 'SwipeList Left Button');
                }}
              >
                <Icon
                  name='info-circle'
                  type='font-awesome'
                  color='#333'
                  size={28}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 75,
                height: '100%',
                marginVertical: 4,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Add User', 'SwipeList Right Button');
                }}
              >
                <Icon
                  name='user-plus'
                  type='font-awesome'
                  color='#333'
                  size={28}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
})