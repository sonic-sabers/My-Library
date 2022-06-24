import {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const delay = 5;

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [],
  );

  return (
    <View>
      {show ? (
        <View>
          <Text>show is true, {delay}seconds passed</Text>
        </View>
      ) : (
        <View>
          <Text>show is false, wait {delay}seconds</Text>
        </View>
      )}
    </View>
  );
}
