import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';

// npm i react-native-slider
import Slider from 'react-native-slider';

export default function App() {
  
  const [seekbarValue, setSeekbarValue] = useState(5);
 
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        <Slider
          value={seekbarValue}
          minimumValue={0}
          maximumValue={10}
          step={1}
          onSlidingComplete={(value) => {
            setSeekbarValue(value);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text>0</Text>
        <Text>10</Text>
      </View>
      <View>
        <Text
          style={{ alignSelf: 'center' }}
        >{`Current Value: ${seekbarValue}`}</Text>
      </View>
    </View>
  )
}