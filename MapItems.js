import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  const array = [
    {
      key: '1',
      title: 'example title 1',
      subtitle: 'example subtitle 1',
    },
    {
      key: '2',
      title: 'example title 2',
      subtitle: 'example subtitle 2',
    },
    {
      key: '3',
      title: 'example title 3',
      subtitle: 'example subtitle 3',
    },
  ];

  const list = () => {
    return array.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Home;