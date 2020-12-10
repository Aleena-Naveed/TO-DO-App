import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [getText, setText] = useState('');
  const [getList, setList] = useState([]);

  const addItem = () =>{
     setList([
       ...getList, 
       {key: Math.random().toString(),
       data: getText}
      ]);
     setText('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.TextStyle}
          placeholder="Enter Item"
          onChangeText={text => setText(text)}
          value={getText}
        />
        <Button 
          title="ADD"
          onPress={addItem}
        />
      </View>
      <View style={styles.ScrollView}>
        <ScrollView>
          {getList.map((item) => 
          <TouchableOpacity
          key={item.key}
          activeOpacity= {0.5}
          >
            <View style={styles.scrollViewItem} >
              <Text style={styles.ScrollText}>{item.data}</Text>
            </View>
          </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 70
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  TextStyle: {
    borderWidth: 2,
    borderRadius: 50,
    width: "60%",
    padding: 10
  },
  ScrollView: {
    width: "100%"
  },
  scrollViewItem: {
    width: "80%",
    backgroundColor: "orange",
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 50
  },
  ScrollText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white'
  }
});
