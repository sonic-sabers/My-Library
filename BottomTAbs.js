import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// npm i @react-navigation/bottom-tabs react-native-elements
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

function TabA() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab A</Text>
    </View>
  );
}
function TabB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab B</Text>
    </View>
  );
}
function TabC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab C</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function ReactNavigationBottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          // Default Color is blue you can change it by following props
          // activeTintColor: '#ff4757',
          // inactiveTintColor: '#ff6b81',
          // Default Background Color is white you can change it by following props
          // activeBackgroundColor: '#ced6e0',
          // inactiveBackgroundColor: '#ced6e0',
        }
      }
    >
      <Tab.Screen
        name='Tab A'
        component={TabA}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Tab B'
        component={TabB}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='message' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Tab C'
        component={TabC}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});