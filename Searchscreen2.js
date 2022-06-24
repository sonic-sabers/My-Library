import * as React from 'react'; import {
Text, View,
StyleSheet, TextInput, FlatList, Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; import * as Animate from 'react-native-animatable'; const listItems = [
'Writing', 'Learning', 'Dharma', 'Isolation', 'Productivity', 'Personal', 'Meditate',
'Mindfulness',
'Buddha',
'Health', 'Fitness', 'Music',
];
export default class App extends React.Component { state = {
searchBarFocused: false,
};
componentDidMount() {
this.keyboardDidShow = Keyboard.addListener( 'keyboardDidShow',
this.keyboardDidShow
);
this.keyboardWillShow = Keyboard.addListener( 'keyboardWillShow',
this.keyboardWillShow
);
this.keyboardWillHide = Keyboard.addListener( 'keyboardWillHide',
this.keyboardWillHide
);
}
keyboardDidShow = () => {
this.setState({ searchBarFocused: true });
};
keyboardWillShow = () => {
this.setState({ searchBarFocused: true });
};
keyboardWillHide = () => {
this.setState({ searchBarFocused: false });
};
render() { return (
<View style={{ flex: 1, paddingTop: 21 }}>
<View
style={{ height: 82,
backgroundColor: '#c5ff59', justifyContent: 'center', paddingHorizontal: 5,
}}>
<Animate.View animation="slideInRight"
duration={1000} style={{
height: 51, backgroundColor: '#ffffff', flexDirection: 'row', padding: 4,
alignItems: 'center',
}}>
<Icon
name={
this.state.searchBarFocused ? 'md-arrow-back' : 'ios-search'
}
style={{ fontSize: 24 }}
/>
<TextInput placeholder="Search Here"
style={{ fontSize: 24, paddingLeft: 14 }}
/>
</Animate.View>
</View>
<FlatList style={{
backgroundColor: this.state.searchBarFocused
? '#6e6363'
: '#ffffff',
}}
data={listItems} renderItem={({ item }) => (
<Text style={{ padding: 21, fontSize: 19 }}>{item}</Text>
)}
keyExtractor={(item, index) => index.toString()}
/>
</View>
);
}
}