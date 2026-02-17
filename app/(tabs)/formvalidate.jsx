import {View,Text,Pressable,StyleSheet,TextInput} from 'react-native';
import {use, useState} from 'react'
export default function App(){
const [email,setEmail]=useState('');
const [pwd,setPwd]=useState('');
const [emailErr,setEmailErr]=useState('');
const [pwdErr,setPwdErr]=useState('');
const checkError=()=>{
    if(email === '')
        setEmailErr("E-mail is blank")
    if(pwd === '')
        setPwdErr("Password is blank")
}
    return(
        
        <View style={{flex:1,padding:20}}>
            <Text>Enter Email :</Text>
            <TextInput style={{borderRadius:10,borderWidth:2,padding:6}}
                onChangeText={setEmail}
                keyboardType='email-address'
                value={email}
            ></TextInput>
            <Text>{
            }</Text>
            <Text>Enter Password :</Text>
            <TextInput style={{borderRadius:10,borderWidth:2,padding:6}}
                onChangeText={setPwd}
                value={pwd}
               secureTextEntry
            ></TextInput>
            <Text>{pwdErr}</Text>
            <Pressable onPress={checkError}>
                <Text style={{backgroundColor:"#112233",borderRadius:10,padding:10}}>Login</Text>
            </Pressable>
            {}
        </View>
    );


}