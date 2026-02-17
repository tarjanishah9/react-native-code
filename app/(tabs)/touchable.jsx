import React, { useState } from "react";
import {Pressable,TouchableNativeFeedback, TouchableWithoutFeedback,View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image,TouchableHighlight} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from '@expo/vector-icons'
export default function App() {
    return(
        <SafeAreaView>
            <View style={{margin:10}}>
                <Pressable style={{padding:10}}
                 android_ripple={{color:'#346'}}
                 >
                    <Ionicons name="home-sharp" size={30} color={'black'}></Ionicons>
                </Pressable>
                <Pressable disabled onPress={()=>alert("Pressed")}
                    style={({pressed })=>({
                        backgroundColor:pressed? 'red': 'blue',
                        opacity:pressed?0.7:1,
                        padding:10,
                        borderRadius:6,
                        margin:10
                    })}>
                    <Text style={{color:'white'}}>Press me</Text>

                </Pressable>
               
                <TouchableOpacity activeOpacity={0.6}  //0.2 default opacity
                style={styles.touchable}
                onPressIn={()=>console.log("In")}
                onPressOut={()=>console.log("Out")}
                // onLongPress={()=>alert("Long clicked")}
                // onPress={()=>console.log("Sign up Clicked")}
                >
                   <Text>SignUp</Text>
                   {/* <Ionicons name="home" size={50} color={'green'}></Ionicons> */}
                    {/* <Image source={{uri:'https://as1.ftcdn.net/v2/jpg/03/09/21/90/1000_F_309219033_S5afGKAxtPCaRXYTY5r6mlIs5yrPk9c3.jpg'}}
                        style={{width:300,height:100}}
                        
                    ></Image> */}
                </TouchableOpacity>
                <TouchableHighlight underlayColor={'black'}
                activeOpacity={0.7}  //default 0.82
                 onPress={()=>{alert('Click')}} >
                        <View style={styles.touchHighlight}>
                            <Text>List Item 1</Text>
                        </View>
                </TouchableHighlight>
                <TouchableWithoutFeedback onPress={()=>console.log("Test")}>
                        <View style={styles.touchHighlight}>
                            <Text>List Item 2</Text>
                        </View>
                </TouchableWithoutFeedback>
{/* 
                <TouchableNativeFeedback onPress={()=>console.log("Testing")}
                background={TouchableNativeFeedback.SelectableBackground()} style={{margin:10}}>
                    <View style={{padding:10,backgroundColor:"green"}}>
                        <Text>Hello</Text>
                        {/* <Ionicons name="happy-outline" size={60} color={"green"}></Ionicons> 
                    </View>
                </TouchableNativeFeedback> */}

            </View>

        </SafeAreaView>
        
    )

}
const styles=StyleSheet.create({
    image:{width:100,height:100},
    touchable:{backgroundColor:'#123456',
        padding:15,
        borderRadius:4
    },
    touchHighlight:{backgroundColor:'green',  padding:15,
        borderRadius:4},
    text:{
        color:'white',
        fontSize:15,
    }

})