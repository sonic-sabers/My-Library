import React, { useEffect, useState } from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [spinValue] = useState(new Animated.Value(0));
  const [fadeValue] = useState(new Animated.Value(0));

  const spinRight = spinValue.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg', '360deg'],
  });

  const spinLeft = spinValue.interpolate({
    inputRange: [0,1],
    outputRange: ['360deg', '0deg'],
  });

  const runAnimation = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }

  useEffect(() => {
    runAnimation();
  })

  return(
    <Animated.View style={[styles.container, {
      opacity: fadeValue,
    }]}> 
      <View style={styles.row}>
        <Animated.View style={{
          transform: [{ rotate: spinRight }]
        }}>
          <View>
            <Icon name="cog" size={80} color={"#DB4437"} />
          </View>
        </Animated.View>
        <View>
          <Animated.View style={{
            transform: [{ rotate: spinLeft }]
          }}>
            <View>
              <Icon name="cog" size={40} color={"#F4B400"} />
            </View>
          </Animated.View>
          <Animated.View style={{
            transform: [{ rotate: spinLeft}]
          }}>
            <View>
              <Icon name="cog" size={40} color={"#0F9D58"} />
            </View>
          </Animated.View>
        </View>
      </View>
      <Text style={styles.text}>
        DATA LOADING ...
      </Text>
    </Animated.View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    paddingTop: 10,
    fontWeight: 'bold',
    color: '#4285F4'
  }
})