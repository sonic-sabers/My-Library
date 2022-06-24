import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';

export default function SearchScreen1() {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', false);
    axios.get('https://randomuser.me/api/?results=150').then(({ data }) => {
      setUsers(data.results);
    });
  }, []);
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchText}
              style={styles.input}
              placeholder='Search'
              textContentType='name'
              onChangeText={(text) => {
                setSearchText(text);
                if (text === '') {
                  return setFilteredUsers([]);
                }
                const filtered_users = users.filter((user) =>
                  user.name.first.toLowerCase().startsWith(text.toLowerCase())
                );
                setFilteredUsers(filtered_users);
              }}
              returnKeyType='search'
            />
            {searchText.length === 0 ? (
              <TouchableOpacity>
                <Icon name='search' size={24} color='#333' />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSearchText('');
                  setFilteredUsers([]);
                }}
              >
                <Icon name='cancel' size={24} color='#333' />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {filteredUsers.length > 0 ? (
          <ScrollView>
            {filteredUsers.map((user) => (
              <TouchableOpacity
                style={styles.userCard}
                onPress={() => {
                  Alert.alert(
                    `${user.name.first} ${user.name.last}`,
                    `You can call me at ${user.phone}`
                  );
                }}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture?.large }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.name.first} ${user.name.last}`}</Text>
                  <Text>{`${user?.phone}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : searchText.length > 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>No user found</Text>
          </View>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Search for users</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    height: 40,
    backgroundColor: '#dfe4ea',
    paddingHorizontal: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  userCard: {
    backgroundColor: '#fafafa',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBoxText: {
    fontSize: 20,
    fontWeight: '500',
  },
});