import React from 'react';
import {
  Text
} from 'react-native';

import TimeAgo from 'react-native-timeago';

export default function App() {
  return (
    <Text style={{ fontSize: 18 }}>
      {'This part of app is coded '}
      <TimeAgo time={'2020-10-23T11:48:54.214Z'} />.
    </Text>
  );
}