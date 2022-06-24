// import React from 'react'
// import { StyleSheet, Text, View, Button } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const About = ({ navigation }) => {
// //https://reactnative.dev/movies.json
// constructor() 
// {
//     super();
//     thiw
// }


//     return (
//         <View>
//             <View style={{ backgroundColor: "lightblue", alignItems: "center", justifyContent: 'center', paddingTop: 400 }}>
//                 <Text>Home Screen</Text>
//                 <Button title="Go to Details" onPress={() => navigation.navigate('Home')} />
//             </View>
//             <View style={{ backgroundColor: "#43aa8b", alignItems: "center", justifyContent: 'center', paddingTop: 400 }}>
//             </View>
//         </View>
//     )
// }
// export default About

// const styles = StyleSheet.create({})

// import React, { Component } from 'react'
// import { Text, StyleSheet, View,Button ,Flatlist } from 'react-native'

// export default class About extends Component {
//     constructor() {
//         super();
//         this.state = {
//         data:[]
//         }
//     }
//     componentDidMount() {
//     this.apiCall();
//     }
//    async apiCall(){
//     let resp = await fetch('https://reactnative.dev/movies.json')
//     let respjson = await resp.json();
//     // console.warn(respjson)
//     this.setState({data:respjson.movies})

//     }
//     render() {
//         return (
//             <View>
//                 {/* <View style={{ backgroundColor: "lightblue", alignItems: "center", justifyContent: 'center', paddingTop: 400 }}>
//                     <Text>Home Screen</Text>
//                     <Button title="Go to Details" onPress={() => navigation.navigate('Home')} />
//                 </View>
//                 <View style={{ backgroundColor: "#43aa8b", alignItems: "center", justifyContent: 'center', paddingTop: 400 }}>
//                 </View> */}
//                 <Flatlist
//                 data={this.state.data}
//                 renderItems={({item})=>
//                 <Text>{item.title}</Text>

//                 }
//                 />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({})


// import React, { Component } from 'react'
// import { View, Text } from 'react-native'

// class About extends Component {
//    state = {
//       data: ''
//    }
//    componentDidMount = () => {
//       fetch('https://jsonplaceholder.typicode.com/posts/1', {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          console.log(responseJson);
//          this.setState({
//             data: responseJson
//          })
//       })
//       .catch((error) => {
//          console.error(error);
//       });
//    }
//    render() {
//       return (
//          <View>
//             <Text>
//                {this.state.data.body}
//             </Text>
//          </View>
//       )
//    }
// }
// export default About



// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View } from 'react-native';

// export default About = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
// //   console.log(data);

//   useEffect(() => {
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (

//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <Text>Loading...</Text> : 
//       ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
//           <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
//           <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
//           <FlatList
//             data={data.movies}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <Text>{item.id + '. ' + item.title } {item.releaseYear}</Text>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// import User from './User';
const About = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        // fetch('https://jsonplaceholder.typicode.com/users/')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return (
        <View style={{ padding: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
                (
                    <FlatList
                        data={users}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={({ item }) =>
                            <>
                                {/* <Text>{item.name } </Text> */}
                                {/* <Text>{item.email} {'\n'} </Text> */}
                                <Text>{item.title}  </Text>
                                <Text>{item.body} {'\n'} </Text>
                            </>
                        }
                    />
                )
            }

        </View>

    );
};
export default About;

