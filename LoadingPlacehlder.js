import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

// npm i rn-placeholder
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

// npm i native-base
import { Card, CardItem } from 'native-base';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const LoadingCard = () => (
  <Placeholder Animation={Fade}>
    <View style={{ flexDirection: 'row' }}>
      <View>
        <PlaceholderMedia style={{ borderRadius: 100 }} size={90} />
      </View>
      <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine width={40} />
        <PlaceholderLine width={60} />
      </View>
    </View>
  </Placeholder>
);

const UserCard = ({ user }) => (
  <View style={{ flexDirection: 'row' }}>
    <Image
      style={{ width: 90, height: 90, borderRadius: 100 }}
      source={{ uri: user.img }}
    />
    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
      <Text style={styles.nameText}>{user.name}</Text>

      <Text style={styles.phoneText}>
        <Icon name='phone' size={16} /> {user.phone}
      </Text>

      <Text style={styles.emailText}>
        <Icon name='mail' size={16} /> {user.email}
      </Text>
    </View>
  </View>
);

export default function LoadingPlaceholderScreen({ navigation }) {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    navigation.setOptions({
      title: 'Contacts',
      headerLeft: () => null,
      headerStyle: { backgroundColor: '#FD7272' },
    });
    wait(5000).then(() => setIsLoading(false));
  }, []);

  const [users] = useState([
    {
      name: 'Morris Flores',
      img: 'https://randomuser.me/api/portraits/men/6.jpg',
      phone: '(814)-659-2120',
      email: 'morris.flores@example.com',
    },
    {
      name: 'Isabella Silva',
      img: 'https://randomuser.me/api/portraits/women/11.jpg',
      phone: '(452)-564-7895',
      email: 'isabella.silva@example.com',
    },
    {
      name: 'Madison Shaw',
      img: 'https://randomuser.me/api/portraits/women/40.jpg',
      phone: '(049)-352-4187',
      email: 'madison.shaw@example.com',
    },
    {
      name: 'Derrick Sims',
      img: 'https://randomuser.me/api/portraits/men/89.jpg',
      phone: '(248)-242-5309',
      email: 'derrick.sims@example.com',
    },
    {
      name: 'Michele Hayes',
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
      phone: '(421)-412-5536',
      email: 'michele.hayes@example.com',
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <ScrollView
      style={{ paddingHorizontal: 10 }}
      showsVerticalScrollIndicator={false}
    >
      {users.map((user) => (
        <Card style={{ marginTop: 10 }}>
          <CardItem>
            {isLoading ? <LoadingCard /> : <UserCard user={user} />}
          </CardItem>
        </Card>
      ))}
      <View style={{ height: 20 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 16,
    marginTop: 4,
  },
  emailText: {
    fontSize: 16,
    marginTop: 2,
  },
});