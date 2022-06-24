/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import { Text, StyleSheet, ScrollView, Image, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RazorpayCheckout from 'react-native-razorpay';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import { Input } from 'react-native-elements';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


export default class Forms extends Component {

  state = {
    text: '',
    ofClass: '',
    parentsName: '',
    Email: '',
    PhoneNo: '',
    CouponCode: '',
    mylist: []
  }

  // componentDidMount() {
  //   const myItems = firebase.database().ref('MyAddings');
  //   myItems.on('value', datasnap => {
  //     // console.table(datasnap.val());
  //     // console.table(Object.values(datasnap.val()))
  //     this.setState({ mylist: Object.values(datasnap.val()) })
  //   });
  // }

  constructor() {
    super();

    this.state = {
      text: '',
      Name: '',
      ofClass: '',
      parentsName: '',
      Email: '',
      PhoneNo: '',
      CouponCode: '',
      mylist: []

    }
  }


  DoPayment() {
    var options = {
      description: 'Trial Payment Gateway',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_OXwh5AjHCYu90U', // Your api key
      amount: '5000',
      name: 'Ashish Gupta',
      prefill: {
        email: 'ashish.nutom@gmail.com',
        contact: '8929495906',
        name: 'NuTom Intern'
      },
      theme: { color: '#F37254' }
    };
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    })
      .catch((error) => {
        // handle failure
        // alert(`Error: ${error.code} | ${error.description}`);
        this.saveitem();
      });
  }

  saveitem() {
    // console.log(this.state.text)
    const mywishes = firebase.database().ref("MyAddings");
    mywishes.push().set({
      text: this.state.text,
      Name: this.state.Name,
      ofClass: this.state.ofClass,
      parentsName: this.state.parentsName,
      Email: this.state.Email,
      PhoneNo: this.state.PhoneNo,
      CouponCode: this.state.CouponCode,

      time: Date.now()
    })

    this.setState({ text: '' });
    this.setState({ Name: '' });
    this.setState({ ofClass: '' });
    this.setState({ parentsName: '' });
    this.setState({ Email: '' });
    this.setState({ PhoneNo: '' });
    this.setState({ CouponCode: '' });
  }
  render() {
    return (
      <View>

          <View>
            <View>
              <Text style={{ color: "#FFFFFF", fontSize: 48, marginVertical: "5%",marginLeft:10 }}>Register</Text>
            </View>
            <View >

              <View>

                <Input
                  variant="underlined"
                  style={styles.input}
                  placeholder="Candidate Name"
                  value={this.state.Name}
                  onChangeText={Name => {
                    this.setState({ Name });
                  }}
                  containerStyle={{color:'white'}}
                />
                <Input
                  placeholder="Class"
                  style={styles.input}
                  keyboardType="numeric"
                  value={this.state.ofClass}
                  onChangeText={ofClass => {
                    this.setState({ ofClass });
                  }}
                />
                <Input
                  placeholder="Email"
                  style={styles.input}

                  value={this.state.Email}
                  onChangeText={Email => {
                    this.setState({ Email });
                  }}
                />
                <Input
                  placeholder="Parents Name"
                  style={styles.input}
                  value={this.state.parentsName}
                  onChangeText={parentsName => {
                    this.setState({ parentsName });
                  }}
                />
                <Input placeholder="Phone number"
                keyboardType="numeric"
                  style={styles.input}
                  value={this.state.PhoneNo}
                  onChangeText={PhoneNo => {
                    this.setState({ PhoneNo });
                  }}
                />
                <Input placeholder="Coupon Code"
                  style={styles.input}
                  value={this.state.CouponCode}
                  onChangeText={CouponCode => {
                    this.setState({ CouponCode });
                  }}
                />

                {/* <Button onPress={console.log("hi hello")} title="Pay Now" /> */}
              </View>

            </View>

            {/* <Button onPress={() => this.saveitem()} title="Apply Coupon" />
                  <Button onPress={() => {
                    // this.saveitem();
                    this.DoPayment();
                  }} title="ClickItem" /> */}


            <View style={styles.register}>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                    this.saveitem();}}
                    // this.DoPayment();}}
                    >
                    <Text style={{ fontWeight: "bold", fontSize: 29, color: "white", }}>
                  Register
                </Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ height: 60, width: 60, borderRadius: 60, backgroundColor: "#0C475C", alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name="arrow-forward" size={44} color="white" />
                </View>
              </View>
            </View>



          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  logo: {
    width: 156,
    height: 54,
    marginLeft: '4.5%',
    // flex:1
  },
  input: {
    // marginVertical: 2,
    height: 1,
  },
  register: {
    marginTop: "7%",
    flexDirection: 'row',
    justifyContent: "space-between",
    // backgroundColor: "#ef3e",

  },
})
