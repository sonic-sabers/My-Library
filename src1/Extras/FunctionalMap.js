// import React from 'react'
// import { View, Text, StyleSheet ,Button} from 'react-native'
// import { globalStyles } from '../styles/global';
// export default function home() {
//     return (
//         <View style={globalStyles.container}>
//         <Text style={globalStyles.titleText}>Home fcedc efef Screen</Text>,
//         <Button title='review page' onPress=() />

//       </View>
//     )
// }

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}