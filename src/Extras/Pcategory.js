import React, {Component} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants';

export default class Latestcourse extends Component {
  state = {
    names: [
      {name: 'Development', id: 11},
      {name: 'Teaching', id: 12},
    ],
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'left',
            marginLeft: -0,
            color: '#111',
            // marginVertical: 10,
          }}>
          Popular category in our platform
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.names.map((item, index) => (
            <>
              <View key={item.id} style={styles.item}>
              <ImageBackground
                source={require('../assets/imgs/unsplash_1.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  height: 130,
                  width: 150,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => alert('You choose ' + item.name)}>
                  <View
                    style={{
                      marginTop: 10,
                      height: 19,
                      width: 50,
                      backgroundColor: '#04B800',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>Hot</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
                <Text>{item.name} </Text>
              </View>
            </>
          ))}
        </ScrollView>
      </View>
    );
  }
}
// export default Latestcourses;

const styles = StyleSheet.create({
  item: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 30,
    // margin: 2,
flex:1,
    // marginHorizontal:50,
  },
  hot: {
    marginTop: 10,
    // height: 19,
    // width: 50,
    // backgroundColor: '#04B800',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderTopColor: '#04B800',
    borderLeftColor: '#04B800',
    borderLeftWidth: 30,
    borderRightColor: 'transparent',
    borderRightWidth: 10,
    borderBottomColor: '#04B800',
    borderBottomWidth: 10,
    borderTopWidth: 10,
    // borderTopLeftRadius: 60,
    // borderTopRightRadius: 60,
    // borderBottomRightRadius: 60,
    // borderBottomLeftRadius: 60,
    // position: "absolute",
    left: 0,
    bottom: 0,
    width: 0,
    height: 0,
    // borderBottomWidth: 10,
    // borderBottomColor: "transparent",
    // borderLeftWidth: 15,
    // borderLeftColor: "red",
    // borderRightWidth: 15,
    // borderRightColor: "red",
  },
});
