import React, { Component } from 'react'; import { ScrollView
, StyleSheet
, View
, Animated
, Text
, Platform, }
from 'react-native';
const Header_Maximum_Height = 150; const Header_Minimum_Height = 50;
//Minimum Height of the Header
export default class Mynewproject extends Component<{}> { constructor() {
super();
this.AnimatedHeaderValue = new Animated.Value(0);
}
render() {
const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
inputRange: [0, Header_Maximum_Height - Header_Minimum_Height], outputRange: ['#ba52ff', '#f522ab'],
extrapolate: 'clamp',
});
const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({ inputRange: [0, Header_Maximum_Height - Header_Minimum_Height], outputRange: [Header_Maximum_Height, Header_Minimum_Height], extrapolate: 'clamp',
});
} },
return (
<View style={styles.MainContainer}>
<ScrollView scrollEventThrottle={16}
contentContainerStyle={{ paddingTop: Header_Maximum_Height }} onScroll={Animated.event([
{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }
])}>
{/* Put all of the Components here inside ScrollView */}
t;Text style={styles.TextViewStyle}>Avatar</Text>
<Text style={styles.TextViewStyle}>Icon</Text>
<Text style={styles.TextViewStyle}>Tile</Text>
<Text style={styles.TextViewStyle}>Slider</Text>
<Text style={styles.TextViewStyle}>Search Bar</Text>
<Text style={styles.TextViewStyle}>Rating</Text>
<Text style={styles.TextViewStyle}>Pricing</Text>
<Text style={styles.TextViewStyle}>List Item</Text>
<Text style={styles.TextViewStyle}>Header</Text>
<Text style={styles.TextViewStyle}>Divider</Text>
<Text style={styles.TextViewStyle}>Check Box</Text>
<Text style={styles.TextViewStyle}>Card</Text>
<Text style={styles.TextViewStyle}>Button</Text>
<Text style={styles.TextViewStyle}>Input</Text>
<Text style={styles.TextViewStyle}>Text</Text>
</ScrollView>
<Animated.View style={[
styles.Header,
{
height: AnimateHeaderHeight,
backgroundColor: AnimateHeaderBackgroundColor,
},
]}>
<Text style={styles.HeaderInsideText}> React Native Elements List
</Text>
</Animated.View>
</View>
);
}
}
const styles = StyleSheet.create({ MainContainer: {
flex: 1,
paddingTop: Platform.OS == 'ios' ? 20 : 0,
},
Header: {
justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0,
right: 0,
top: Platform.OS == 'ios' ? 20 : 0,
},
HeaderInsideText: { color: '#ffe48f', fontSize: 19, textAlign: 'center',
},
TextViewStyle: { textAlign: 'center', color: '#0a0a0a', fontSize: 19,
margin: 4,
padding: 6,
},
});