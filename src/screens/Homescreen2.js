import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Homescreen2 = ({navigation}) => {
  const [email, setEmail] = useState('loading');
  const Boiler = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://10.0.2.2:3000/', {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEmail(data.email);
      });
  };
  useEffect(() => {
    Boiler();
  }, []);

  const logout = () => {
    AsyncStorage.removeItem('token').then(() => {
      navigation.navigate('LoginScreen');
    });
  };

  return (
    <>
      <Text style={{fontSize: 18}}>your email is {email}</Text>
      <Button
        mode="contained"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        onPress={() => logout()}>
        logout
      </Button>
    </>
  );
};

export default Homescreen2;
