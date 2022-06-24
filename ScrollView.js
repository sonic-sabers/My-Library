import React, { Component } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
  
class App extends Component {
  state = {
    // Sample data
    items: [
      { item: "Item 1", price: "10", id: 1 },
      { item: "Item 2", price: "20", id: 2 },
      { item: "Item 3", price: "30", id: 3 },
      { item: "Item 4", price: "40", id: 4 },
      { item: "Item 5", price: "50", id: 5 },
      { item: "Item 6", price: "60", id: 6 },
      { item: "Item 7", price: "70", id: 7 },
      { item: "Item 8", price: "80", id: 8 },
      { item: "Item 9", price: "90", id: 9 },
      { item: "Item 10", price: "100", id: 10 },
      { item: "Item 11", price: "110", id: 11 },
      { item: "Item 12", price: "120", id: 12 },
      { item: "Item 13", price: "130", id: 13 },
      { item: "Item 14", price: "140", id: 14 },
      { item: "Item 15", price: "150", id: 15 },
    ],
  };
  render() {
    return (
      <View style={styles.screen}>
        <ScrollView> // use of ScrollView Component
          {this.state.items.map((item, index) => (
            <View key={item.id}>
              <View style={styles.summary}>
                <Text style={styles.summaryText}>
                  {item.item} <Text style={styles.amount}>
                      ${item.price}</Text>
                </Text>
                <Button title="Order" color="#FFC107" 
                      onPress={() => { }} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
  
// Screen styles
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "openSansBold",
    fontSize: 18,
  },
  amount: {
    color: "#C2185B",
  },
});
  
export default App;