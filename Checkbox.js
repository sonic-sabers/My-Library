import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{}}>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
        color="blue"
      />
      {checked == 'first' ? (
        <Text style={{ alignSelf: 'center' }}>sdvdsvsdv</Text>
      ) : <Text style={{ alignSelf: 'center' }}></Text>}
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      {checked == 'second' && <Text style={{}}>sdvdsvsdv</Text>}
    </View>
  );
};

export default MyComponent;
