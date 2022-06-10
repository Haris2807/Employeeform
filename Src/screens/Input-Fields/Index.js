import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/button'
import InputCopy from '../InputCopy/Index'
import * as Animatable from 'react-native-animatable';


const Index = () => {
  const [inputs, setInputs] = useState([{ key: '', value: '' }]);

  const addHandler = () => {
    const _inputs = [...inputs];
    _inputs.push({ key: '', value: '' });
    setInputs(_inputs);
  }

  const deleteHandler = () => {
    console.log(inputs);

    let val = inputs.slice(0, -1)
    setInputs(val)
    // setInputs( inputs.pop());
    console.log("line del ", inputs)


  }

  return (

    <View>
      {/*Header content*/}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        {/*Left plus button*/}
        <TouchableOpacity onPress={() => deleteHandler()}>
          <Image source={require('../../../assets/minus.png')} style={styles.ButtonImageLeft} />
        </TouchableOpacity>

        {/*right plus button*/}
        <TouchableOpacity onPress={addHandler}>
          <Image source={require('../../../assets/plus.png')} style={styles.ButtonImageRight} />
        </TouchableOpacity>
      </View>

      {/*Horizontal line*/}
      <View
        style={styles.horizontalLine}
      />

      {/*INPUT CONTENT*/}
      <ScrollView>
        {inputs.map((input, key) => (
          <InputCopy key={key} index={key} />    
        ))}
      </ScrollView>
   

    </View>

  )
}

export default Index

const styles = StyleSheet.create({
  ButtonImageLeft: {
    width: 35, height: 35, marginLeft: 10
  },
  ButtonImageRight: {
    width: 35, height: 35, marginRight: 10
  },
  InputView: {

    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    height: 55,
    width: 390,
    alignSelf: 'center'
  },
  Button: {

    alignSelf: 'center',
    marginTop: 10,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 15
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
    marginLeft: 10
  },
})