import { StyleSheet, Text, View, Image, TouchableOpacity,Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/button'
import InputCopy from '../InputCopy/Index'
import * as Animatable from 'react-native-animatable';


const Index = ({ index, input }) => {
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        check_passwordInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        name: "",
        email: "",
        isValidEmail: true,
    });

    const userName = (val, key) => {

        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true,
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
            })
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handlePasswordChange = (val) => {
        

        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                check_passwordInputChange: true,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                check_passwordInputChange: false,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

  

    return (
        <View>
            <View style={{ marginTop: 5 }}>
                <View style={{ marginVertical: 2 ,marginLeft:10}}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Employe Form {index + 1}</Text>
                </View>

                <View style={{ marginTop: -10 }}>
                    <View style={styles.InputView}>
                        <Input placeholder="Name" value={data.name.value}
                            onChangeText={(text) => setData(e => ({ ...e, name: text,isValidUser:userName(text) }))} />
                    </View>
                    {!!data.username.length && <>
                        {data.isValidUser ? <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={{ color: 'green' , marginLeft: 20}}>Valid</Text>
                        </Animatable.View> : (
                            <Animatable.View animation="fadeInLeft" duration={500}>

                                <Text style={styles.errorMsg}>Your Name Minimum 4 characters</Text>
                            </Animatable.View>
                        )}
                    </>}


                    <View style={styles.InputView}>
                        <Input placeholder="Email" value={data.email.value}
                            onChangeText={(text) => setData(e => ({ ...e, email: text, isValidEmail: validateEmail(text) }))} />
                    </View>
                    {!!data.email.length && <>
                        {data.isValidEmail ? <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={{ color: 'green', marginLeft: 20 }}>Valid</Text>
                        </Animatable.View> : (
                            <Animatable.View animation="fadeInLeft" duration={500}>

                                <Text style={styles.errorMsg}>Invalid Email</Text>
                            </Animatable.View>
                        )}
                    </>}

                    <View style={styles.InputView}>
                        <Input placeholder="Password"
                            onChangeText={(text) => setData(e => ({ ...e, password: text, isValidPassword: handlePasswordChange(text)}))}
                         
                            secureTextEntry={data.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry} style={{marginRight:10 }}>
                            {data.secureTextEntry ? (
                                <Image source={require("../../../assets/eyeclose.png")} style={{ marginTop: 20,}} />
                            ) : (
                                <Image
                                    source={require("../../../assets/eye-open.png")}
                                    style={{ width: 30, height: 15, marginTop: 20 }}
                                />
                            )}

                        </TouchableOpacity>

                    </View>
                  
                         {!!data.password.length && <>
                            {data.isValidPassword ? <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={{ color: 'green', marginLeft: 20 }}>Valid</Text>
                            </Animatable.View> : (
                                <Animatable.View animation="fadeInLeft" duration={500}>
    
                                    <Text style={styles.errorMsg}>Invalid password</Text>
                                </Animatable.View>
                            )}
                        </>}
                </View>
            </View>
            <View style={styles.Button}>
                <Button title={'Submit'} onPress={()=>(Alert.alert('Your Response Has Been Submitted'))} />
            </View>
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
        width: '95%',
        alignSelf: 'center',
         justifyContent: 'space-between'
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
        marginLeft: 20
    },
})