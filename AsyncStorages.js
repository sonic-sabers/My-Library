import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AsyncStorages() {
  const [TextInputValue, SetTextInputValue] = useState('');
  const [value, setValue] = useState('');
  const saveValue = () => {
    if (TextInputValue) {
      AsyncStorage.setItem('any_key_here', TextInputValue);
      SetTextInputValue('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };
  const getValue = () => {
    AsyncStorage.getItem('any_key_here').then(value => {
      setValue(value);
    });
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={data => SetTextInputValue(data)}
      />

      {/* <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={this.handlePassword}
      /> */}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
					saveValue();        }}>
        <Text style={styles.submitButtonText}> Set Value </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          getValue();
        }}>
        <Text style={styles.submitButtonText}> Get Value </Text>
      </TouchableOpacity>

      <Text>{value}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
