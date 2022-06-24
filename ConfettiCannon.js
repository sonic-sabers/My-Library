import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  
  const confettiRef = useRef();
  const [confettiAnswer, setConfettiAnswer] = useState('');
  
  return (
    <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginVertical: 6,
              fontWeight: '400',
            }}
          >
            Which company built React Native?
          </Text>
          <TextInput
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#f1f3f6',
              paddingHorizontal: 10,
              borderRadius: 4,
              marginTop: 10,
            }}
            placeholder={'Hint: Owner of Instagram, WhatsApp'}
            onChangeText={(text) => setConfettiAnswer(text)}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              if (confettiAnswer.trim().toLowerCase() === 'facebook') {
                confettiRef.current.start();
              } else {
                Alert.alert('Wrong Answer', 'Correct Answer is Facebook');
              }
            }}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <ConfettiCannon
          count={150}
          origin={{ x: 0, y: 0 }}
          autoStart={false}
          ref={confettiRef}
          explosionSpeed='1000'
          fallSpeed='2500'
        />
    </View>
  )
}

const styles = StyleSheet.create({
  submitButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#EE5A24',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginTop: 10,
  },
  submitButtonText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18,
  },
})