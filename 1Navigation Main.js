

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

function Detail() {
  return (
      <View>
          <Text>dwdwd</Text>
      </View>
  );
}

function Home({navigation}) {
  return (
      <View>
          <Text>efe</Text>
          <Button title="navigation" onPress{()=>navigation.navigate(Detail)}/>
      </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
