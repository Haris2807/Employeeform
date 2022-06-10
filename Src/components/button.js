import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React from 'react'


const button = ({onPress,title,}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
    button:{height:50,
        width:350,
        borderRadius:15,
        backgroundColor:'red',
        justifyContent:'center'
       
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:20

    }
})