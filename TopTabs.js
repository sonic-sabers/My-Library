import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// npm install @react-navigation/material-top-tabs react-native-tab-view
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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

const Tab = createMaterialTopTabNavigator();
export default function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tab A' component={TabA} />
      <Tab.Screen name='Tab B' component={TabB} />
      <Tab.Screen name='Tab C' component={TabC} />
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
    fontSize: 30,
    fontWeight: 'bold',
  },
});