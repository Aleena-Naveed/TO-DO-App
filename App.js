import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
  var btnclr = props.color != undefined? props.color : 'blue';
  return(
    <TouchableOpacity activeOpacity={0.5} onPress={props.add}>
          <View style={ {...styles.buttonContainer, backgroundColor: btnclr }}>
            <Text style={styles.buttonText}>
              {props.text}
            </Text>
          </View>
    </TouchableOpacity>
  );
}
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
        <CustomButton add={addItem} text="Enter" color="orange" />
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
    width: "70%",
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
  buttonContainer:{ 
    paddingHorizontal: 20, 
    padding: 10, 
    borderRadius: 50,
},
buttonText:{ 
    fontSize: 16,
    color:'white'
}
});
