import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';

export default function App() {
  return (
    <View>
      <VictoryChart
        width={360}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[2011, 2012, 2013, 2014, 2015]}
          tickFormat={['2011', '2012', '2013', '2014', '2015']}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `₹${x / 1000}k`}
        />
        <VictoryBar
          data={[
            { year: 2011, earnings: 13000 },
            { year: 2012, earnings: 10500 },
            { year: 2013, earnings: 15250 },
            { year: 2014, earnings: 12600 },
            { year: 2015, earnings: 19000 },
          ]}
          x='year'
          y='earnings'
        />
      </VictoryChart>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 18,
        }}
      >
        Sales Chart (2011-2015)
      </Text>
    </View>
  );
}