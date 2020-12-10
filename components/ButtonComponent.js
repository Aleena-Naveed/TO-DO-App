import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CustomButton = (props) => {
    if (props.disabled)
        var btnclr = 'grey';
    else
        var btnclr = props.color != undefined? props.color : 'blue';
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={props.add} disabled={props.disabled}>
            <View style={ {...styles.buttonContainer, backgroundColor: btnclr }}>
              <Text style={styles.buttonText}>
                {props.text}
              </Text>
            </View>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    buttonContainer:{ 
        paddingHorizontal: 20, 
        padding: 10, 
        borderRadius: 50,
    },
    buttonText:{ 
        fontSize: 16,
        color:'white'
    }
  })

  export default CustomButton;
