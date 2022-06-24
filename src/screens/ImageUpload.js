import React, {useEffect} from 'react';
import {View, Button, Image} from 'react-native';

import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';
import firebaseConfig from '../services/FirebaseConfig';
import ImagePicker from 'react-native-image-crop-picker';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

import {StyleSheet, Text} from 'react-native';

export default function ImageUpload() {
  const [Img, setImg] = React.useState(null);
  const uploading = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image);
      setImg(image.path);
    });
  };
  return (
    <View>
    <Image source={{uri:Img}} style = {styles.img}/>
      <Text>Hi</Text>
      <Button mode='contained' onPress={uploading}>Upload Pic</Button>
    </View>
  );
}
const styles = StyleSheet.create({
    img:{},
    });
