import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Button, Input, TextButton} from '../components';
// service
import {Auth} from '../services';

import auth from '@react-native-firebase/auth';
// function onAuthStateChanged(user) {
//   setUser(user);
//   if (initializing) setInitializing(false);
// }
const delay = 0.5;
export default Home = ({navigation}) => {
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const [age, setage] = useState();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>

      <Input placeholder="Age" value={age} onChangeText={a => setage(a)} />
      <Button
        buttonText="UpdateUserInDb"
        onPress={() => Auth.UpdateUserInDb(user.uid, age)}
      />

      <TextButton
        text="Add Products"
        onPress={() => navigation.navigate('AddProduct')}
      />
      <TextButton
        text="View Products"
        onPress={() => navigation.navigate('Products')}
      />
      {/* <Text>{user.email}</Text> */}

      {show ? <Text>{user.email}and{user.age}</Text> : <ActivityIndicator size={20} />}

      <Button onPress={() => console.log(user)} buttonText="Button" />
      <TouchableOpacity onPress={() => Auth.signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      {/* <ImageUpload/> */}
    </View>
  );
};
