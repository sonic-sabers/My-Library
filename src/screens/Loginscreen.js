import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
  const [email, setemail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const sendCred = async () => {
    fetch('http://10.0.2.2:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: email,
        pw: Password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        try {
          await AsyncStorage.setItem('token', data.token);
          navigation.replace('Homescreen');
        } catch (e) {
          console.log('error hai', e);
          Alert(e);
        }
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#2196f3'}}>
      {/* <Text>Home Screen</Text> */}

      <Image
        source={{
          uri: 'https://cdn.educba.com/academy/wp-content/uploads/2019/01/cropped-EDUCBA_LOGO.png',
        }}
        style={{
          width: 250,
          height: 70,
          marginBottom: 50,
          marginTop: 190,
          alignSelf: 'center',
        }}
      />
      <TextInput
        style={{marginHorizontal: 20}}
        label="Email"
        value={email}
        onChangeText={email => setemail(email)}
        mode="outlined"
      />
      <TextInput
        style={{marginHorizontal: 20}}
        label="Password"
        value={Password}
        onChangeText={Password => setPassword(Password)}
        mode="outlined"
      />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      /> */}
      <TouchableOpacity
        style={{
          marginTop: 50,
          height: 40,
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dddf00',
          borderRadius: 20,
          //   marginHorizontal:20
          alignSelf: 'center',
        }}
        onPress={() => sendCred()}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          //   marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={() => navigation.replace('Signupscreen')}>
        <Text>Not Have an account?</Text>
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: '#e56b6f',
            borderRadius: 20,
            //   marginHorizontal:20
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
            Sign UP
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
