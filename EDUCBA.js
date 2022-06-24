import React, {Component} from 'react';
import Overlay from 'react-native-modal-overlay';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';
export default class EDUCBA extends Component {
  onClose = () =>
    this.setState({
      modalVisible: false,
    });
  state = {
    modalVisible: true,
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={{flex: 1}}>
        <View>
          <Overlay
            visible={this.state.modalVisible}
            onClose={this.onClose}
            closeOnTouchOutside
            style={{
              fontSize: 36,
              marginBottom: 48,
              color: '#faf569',
              backgroundColor: '#54f0cb',
              alignItems: 'center',
              borderWidth: 10,
              textAlign: 'center',
              borderRadius: 100,
              borderColor: '#d938f5',
              justifyContent: 'center',
            }}>
            <ImageBackground
              source={{
                uri: 'https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}
              style={{flex: 1}}
            />
            <Image
              source={{
                uri: 'http://pngimg.com/uploads/lion_king/small/lion_king_PNG90.png',
              }}
              style={{
                height: 150,
                marginTop: 10,
                width: 160,
              }}
            />
            <Text
              style={{
                fontSize: 30,
                marginBottom: 48,
                color: '#faf569',
                backgroundColor: '#54f0cb',
                alignItems: 'center',
                borderWidth: 10,
                textAlign: 'center',
                borderRadius: 100,
                borderColor: '#d938f5',
                justifyContent: 'center',
              }}>
              Welcome to Example of React Native Overlay
            </Text>
          </Overlay>
        </View>
      </ImageBackground>
    );
  }
}
