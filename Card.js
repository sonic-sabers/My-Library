import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// npm i native-base
import { Card, CardItem } from 'native-base';
// npm i react-native-elements
import { Icon } from 'react-native-elements';

export default function App() {
  
  return (
    <View>
      <Card style={{ marginTop: 10 }}>
        <CardItem header bordered style={styles.cardHeader}>
          <Text style={styles.subheading}>Card Title</Text>
        </CardItem>
        <CardItem>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
            >
              Card Content
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quaerat autem labore voluptas repudiandae voluptatem veniam
              tenetur facere neque omnis aperiam, nam deserunt minima ullam
              dolore iste eius assumenda consectetur a!
            </Text>
          </View>
        </CardItem>
        <CardItem footer bordered>
          <View style={styles.footer}>
            <TouchableOpacity>
              <Text>Footer</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Icon name='google' type='font-awesome' />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Icon name='instagram' type='font-awesome' />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Icon name='twitter' type='font-awesome' />
              </TouchableOpacity>
            </View>
          </View>
        </CardItem>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  subheading: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
  },
  cardHeader: {
    backgroundColor: '#6a90eb',
  },
  footer: {
    width: '100%',
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})