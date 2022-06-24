
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Item from './Item';

class App extends Component {
  state = {
    search: '',
  };

  filterList(list) {
    return list.filter(
      (listItem) =>
        listItem.artist
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        listItem.song.toLowerCase().includes(this.state.search.toLowerCase()),
    );
  }

  render() {
    const list = [
      {artist: 'The Weeknd', song: 'Blinding Lights'},
      {artist: 'Drake', song: 'Toosie Slide'},
      {artist: 'Roddy Ricch', song: 'The Box'},
      {artist: 'Dua Lipa', song: 'Dont Start Now'},
    ];

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
        />
        {this.filterList(list).map((listItem, index) => (
          <Item key={index} artist={listItem.artist} song={listItem.song} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
  },
});

export default App;