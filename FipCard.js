import React, { useRef } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

// npm install react-native-card-flip
import CardFlip from 'react-native-card-flip';

export default function FlipCard() {
  
  const flipcard = useRef();
  
  return (
    <CardFlip ref={flipcard} style={{ width: 250, height: 300 }}>
      <TouchableOpacity
        style={{
          width: 250,
          height: 300,
          backgroundColor: '#333',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
        onPress={() => flipcard.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}
        >
          How many weeks are there in an year?
        </Text>
        <Text style={{ color: '#fff', marginTop: 14 }}>
          (Click for answer)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 250,
          height: 300,
          backgroundColor: '#f1f3f6',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
        onPress={() => flipcard.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: '#333', fontSize: 18 }}
        >
          <Text style={{ fontWeight: 'bold' }}>Answer:</Text> 52 weeks
        </Text>
      </TouchableOpacity>
    </CardFlip>
  )
