import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLandscape: {
    backgroundColor: '#000',
  },
  box: {
    backgroundColor: 'red',
    height: 100,
  },
});
const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  });
  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};
export default function App() {
  const screenData = useScreenDimensions();
  console.log(screenData);
  return (
    <View
      style={[
        styles.container,
        screenData.isLandscape && styles.containerLandscape,
      ]}
    >
      <View style={[styles.box, { width: screenData.width / 2 }]} />
    </View>
  );
};