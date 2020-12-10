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

  const removeItem = (itemKey) =>{
    setList(List =>getList.filter(item => item.key != itemKey));
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
          onPress= {() => removeItem(item.key)}
          >
            <View style={styles.scrollViewItem} >
              <Text style={styles.ScrollText}>{item.data}</Text>
              <View style={{backgroundColor: 'grey', padding: 5, borderRadius:50}}>
                <Text style={styles.crossText}>X</Text>
              </View>
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
    padding: 80,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%"
  },
  TextStyle: {
    borderWidth: 2,
    borderRadius: 50,
    width: "80%",
    padding: 10
  },
  ScrollView: {
    width: "100%"
  },
  scrollViewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
  },
  crossText: {
    fontSize: 16,
    color: 'white',
  }
});
