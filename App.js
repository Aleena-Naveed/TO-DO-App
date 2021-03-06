import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from './components/ButtonComponent'; 

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

  const scrollView = (
    <ScrollView style={styles.ScrollView}>
          {getList.map((item, index) => 
          <TouchableOpacity
          key={item.key}
          activeOpacity= {0.5}
          >
            <View style={styles.scrollViewItem} >
          <Text style={styles.ScrollText}>{index+1}#: {item.data}</Text>
              <TouchableOpacity onPress= {() => removeItem(item.key)}>
                <View 
                style={styles.crosstextContainer}>
                <Text style={styles.crossText}>X</Text>
              </View>
            </TouchableOpacity>
            </View>
          </TouchableOpacity>
          )}
        </ScrollView>
  );

  const emptyScrollView = (
    <View style={{paddingTop: 30}}>
      <Text style={{fontSize: 20, fontStyle: 'italic', color: "grey"}}>No ToDo Items, Hurray!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
            style={styles.TextStyle}
            placeholder="Enter Item"
            onChangeText={text => setText(text)}
            value={getText}
        />  
        <CustomButton add={addItem} text="Enter" color="orange" disabled={getText.length <= 0} />
      </View>
      {getList.length <= 0 ? emptyScrollView : scrollView}
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
    borderBottomWidth: 2,
    width: "65%",
    padding: 10
  },
  ScrollView: {
    paddingTop: 20,
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
  crosstextContainer: {
    backgroundColor: 'white', 
    padding: 5, 
    borderRadius:50,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  
});
