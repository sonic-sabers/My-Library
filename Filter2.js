import React, {useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState([
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'one',
    'one',
  ]);

  const onPress = () => {
    const newData = data.filter((item) => {
      return item !== 'one';
    });
    setData(newData);
  };

  return (
    <View style={{margin: 10, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList data={data} renderItem={({item}) => <Text>{item}</Text>} />
      <Button onPress={onPress} title="Click here to filter" color="#841584" />
    </View>
  );
};

export default App;