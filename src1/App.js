// import * as React from 'react';
// import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// // import StackN from './src/navigator/Navigation';
// import {createStackNavigator} from '@react-navigation/stack';
// import Login from './src1/screens/Login';
// import SignTry from './src1/screens/SignTry';

// const Stack = createStackNavigator();
// const screenOptionStyle = {
//   headerShown: false,
// };

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to SignTry"
//         onPress={() => navigation.navigate('SignTry')}
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Notifications"
//         onPress={() => navigation.navigate('Notifications')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={screenOptionStyle}>
//         <Stack.Screen name="SignTry" component={SignTry} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//         <Stack.Screen name="Login" component={Login} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }
import React from 'react';
import AppContainer from './src/navigation/AppContainer';

export default App = () => {
  return(
      <>
        <AppContainer />
      </>
  )
}
