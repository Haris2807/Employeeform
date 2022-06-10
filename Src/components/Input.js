import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'


const Input = ({placeholder,secureTextEntry,onChangeText,value}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value} style={styles.Input}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    Input:{
          height:55,
          width:300,
        paddingLeft:15,
        marginLeft:10,
        alignItems:'center',
        
    }
})