import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// npm i react-native-progress
import * as Progress from 'react-native-progress';

export default function App() {
  
  const [loadPercentage, setLoadPercentage] = useState(0);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Progress.Bar progress={loadPercentage} width={200} />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#4b4b4b',
            borderRadius: 4,
          }}
          onPress={() => {
            let t = 0;
            let prog = setInterval(function () {
              t = t + 0.03;
              setLoadPercentage(t);
              if (t >= 1) {
                clearInterval(prog);
              }
            }, 100);
          }}
        >
          <Text
            style={{ fontWeight: '500', color: '#fff', fontSize: 18 }}
          >
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#4b4b4b',
            borderRadius: 4,
            marginLeft: 10,
          }}
          onPress={() => {
            setLoadPercentage(0);
          }}
        >
          <Text
            style={{ fontWeight: '500', color: '#fff', fontSize: 18 }}
          >
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}