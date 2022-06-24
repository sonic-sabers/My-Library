/* eslint-disable prettier/prettier */
import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import { ListItem, List } from 'native-base';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


export default class Home extends Component {


  state = {
    text: '',
    mylist: [],
    counter:2100,
  }

  componentDidMount() {
    const myitems = firebase.database().ref('mytext1');
    myitems.on("value", datasnap => {
      // console.log(Object.values(datasnap.val()))
      this.setState({ mytext: Object.values(datasnap.val()) })
    })
  }

  saveitem() {
    // console.log(this.state.text)
    const mytext1 = firebase.database().ref('mytext1');
    mytext1.push().set({
      text: this.state.text,
      time: Date.now(),
      counter:'NUTOLP'+this.state.counter,
    })
    this.setState({ text: '' ,counter: this.state.counter + 1})

  }


  render() {
    console.log(this.state)
    const myitems = this.state.mylist.map(item => {
      return (
        <ListItem styles={{ justifyContent: 'space-between', backgroundColor: "green", margin: 10 }}>
          <Text>{item.text}</Text>
          <Text>{item.time}</Text>
        </ListItem>
      )
    })
    const counter = this.state.counter;
    return (
      <View>
        <Text>Hi hello</Text>
        <TextInput
          label="text1"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          mode="outlined"
          underlineColor="black"
          outlineColor="green"
        />

        <Button
          // onPress={() => navigation.navigate('Login')}
          onPress={() => this.saveitem()}
        >Button</Button>
        <List>
          {myitems}
        </List>
        {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button> */}



        <View style={styles.container}>
          <Text style={styles.counter}>RollNumber: NUTOLP{counter}</Text>
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={this.onIncrement}
          ><Text>Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

}

const styles = StyleSheet.create({})
