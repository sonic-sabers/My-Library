import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// npm install @react-navigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function ScreenA() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen A</Text>
    </View>
  );
}
function ScreenB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen B</Text>
    </View>
  );
}
function ScreenC() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen C</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Screen A'>
        <Drawer.Screen name='Screen A' component={ScreenA} />
        <Drawer.Screen name='Screen B' component={ScreenB} />
        <Drawer.Screen name='Screen C' component={ScreenC} />
      </Drawer.Navigator>
    </NavigationContainer>
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