import React, {useCallback} from 'react';
import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
// import EDUCBA from './';

const supportedURL = 'https://www.educba.com/';
const unsupportedURL = 'sms: +123456789';
const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);
  return <Button title={children} onPress={handlePress} color="#922ce6" />;
};
const Separator = () => <View style={styles.separator} />;
const Referals = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* <EDUCBA/>*/}
    {/* <EDUCBA/> */}
      <View>
        <Text style={styles.title}>For Getting More Information about Us:</Text>
        <OpenURLButton url={supportedURL}>
          Click to Visit our Website
        </OpenURLButton>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>For Getting Assistance over Chat:</Text>
        <OpenURLButton url={unsupportedURL}>Click to Send us SMS</OpenURLButton>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faed75',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 200,
    borderBottomColor: '#d94e9a',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Referals;
