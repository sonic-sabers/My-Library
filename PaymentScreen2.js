import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Feather as Icon } from '@expo/vector-icons';

// https://fonts.google.com/specimen/Nunito+Sans
import { useFonts } from 'expo-font';
import NSLight from '../../assets/fonts/NunitoSans/NunitoSansLight.ttf';
import NSRegular from '../../assets/fonts/NunitoSans/NunitoSansRegular.ttf';
import NSBold from '../../assets/fonts/NunitoSans/NunitoSansBold.ttf';
import NSExtraBold from '../../assets/fonts/NunitoSans/NunitoSansExtraBold.ttf';

export default function PaymentScreen2({ navigation }) {
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });

  const [transactions] = useState([
    { type: 'credit', amount: '5000', comment: '', from: 'Alice Jackson' },
    { type: 'debit', amount: '799', comment: '', to: 'Netflix' },
    { type: 'debit', amount: '2000', comment: '', to: 'Cassandra Gilbert' },
    { type: 'credit', amount: '1000', comment: '', from: 'CREDIT INTEREST' },
  ]);

  StatusBar.setBarStyle('light-content');
  navigation.setOptions({
    headerShown: false,
  });

  function getCreditAmount() {
    return transactions
      .map((t) => {
        if (t.type === 'credit') return t.amount;
      })
      .reduce((acc, val) => {
        if (acc !== undefined && val !== undefined) {
          return acc + parseInt(val);
        }
        return acc;
      }, 0);
  }

  function getDebitAmount() {
    return transactions
      .map((t) => {
        if (t.type === 'debit') return t.amount;
      })
      .reduce((acc, val) => {
        if (acc !== undefined && val !== undefined) {
          return acc + parseInt(val);
        }
        return acc;
      }, 0);
  }

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <View>
      <LinearGradient
        style={{
          height: 260,
          borderRadius: 20,
          marginTop: -20,
          paddingTop: 60,
          paddingHorizontal: 10,
        }}
        start={[0, 1]}
        end={[1, 0]}
        colors={['#232526', '#414345']}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: 'https://randomuser.me/api/portraits/men/86.jpg' }}
            />
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}
          >
            <Text
              style={{ fontFamily: 'NSExtraBold', fontSize: 16, color: '#fff' }}
            >
              John Doe
            </Text>
            <Text
              style={{ fontFamily: 'NSRegular', fontSize: 14, color: '#fff' }}
            >
              johndoe@oksbi
            </Text>
          </View>
          <TouchableOpacity style={{ justifyContent: 'center' }}>
            <Icon name='bell' color='#fff' size='26' />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View
        style={{
          backgroundColor: '#fff',
          height: 200,
          marginTop: -120,
          borderRadius: 20,
          marginHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          padding: 14,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'NSRegular', fontSize: 16 }}>
              Balance
            </Text>
            <Text style={{ fontFamily: 'NSBold', fontSize: 30 }}>₹52,645</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#333',
                paddingLeft: 4,
                paddingRight: 10,
                paddingVertical: 4,
                borderRadius: 4,
              }}
            >
              <Icon name='arrow-up-right' size='20' color='#fff' />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'NSExtraBold',
                  fontSize: 16,
                  marginLeft: 4,
                }}
              >
                Send
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#333',
                marginLeft: 10,
                paddingLeft: 4,
                paddingRight: 10,
                paddingVertical: 4,
                borderRadius: 4,
              }}
            >
              <Icon name='arrow-down-left' size='20' color='#fff' />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'NSExtraBold',
                  fontSize: 16,
                  marginLeft: 4,
                }}
              >
                Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Icon name='trending-down' color='green' size='30' />
            <Text style={{ fontFamily: 'NSBold', fontSize: 18 }}>Received</Text>
            <Text
              style={{ fontSize: 16, marginTop: 4, fontFamily: 'NSRegular' }}
            >
              ₹{getCreditAmount()}
            </Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Icon name='trending-up' color='red' size='30' />
            <Text style={{ fontFamily: 'NSBold', fontSize: 18 }}>Spent</Text>
            <Text
              style={{ fontSize: 16, marginTop: 4, fontFamily: 'NSRegular' }}
            >
              ₹{getDebitAmount()}
            </Text>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Icon name='pocket' color='#0984e3' size='30' />
            <Text style={{ fontFamily: 'NSBold', fontSize: 18 }}>Saved</Text>
            <Text
              style={{ fontSize: 16, marginTop: 4, fontFamily: 'NSRegular' }}
            >
              ₹{getCreditAmount() - getDebitAmount()}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontFamily: 'NSExtraBold', fontSize: 20 }}>
            Recent Transactions
          </Text>
          <TouchableOpacity>
            <Icon name='more-horizontal' size='24' />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {transactions.map((t) => (
            <View
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 10,
                paddingVertical: 6,
                paddingHorizontal: 10,
                flexDirection: 'row',
              }}
            >
              <View>
                {t.type === 'credit' ? (
                  <Icon name='arrow-down' size='30' color='green' />
                ) : (
                  <Icon name='arrow-up' size='30' color='red' />
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontFamily: 'NSRegular', fontSize: 16 }}>
                  {t.from ? t.from : t.to}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}
              >
                {t.type === 'credit' ? (
                  <Text style={{ fontFamily: 'NSBold', color: 'green' }}>
                    + ₹{t.amount}
                  </Text>
                ) : (
                  <Text style={{ fontFamily: 'NSBold', color: 'red' }}>
                    - ₹{t.amount}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}