import { useState } from 'react'
import {View,TextInput,FlatList,Pressable,Text, StyleSheet} from 'react-native'

export default function App(){
    const [myMessage,setMyMessage]=useState("")
    const [urMessage,setUrMessage]=useState("")
    const [isMyMessage,setIsMyMessage]=useState(false)
    const [flat,setFlat]=useState([{}])
    const sendMyMessage=()=>{
        setIsMyMessage(true)
        const newData= {'id':flat.length+1,'message':myMessage,'isMyMes':true }
        setFlat([...flat,newData]); //spread operator
        setMyMessage("")
    }
    return (
        <View style={{padding:20,flex:1}}>
            <View>
                <FlatList
            data={flat}
            style={{marginTop:10}}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                        <View style={{backgroundColor:'cyan',
                        flex:1,padding:10}}>
                                 <Text style={{color:'black',
                                    textAlign:isMyMessage?'right':'left'}}>{item.message}</Text>
                                
                                
                        </View> 
                  
                )}
            ></FlatList>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TextInput placeholder='My Message' style={style.input}
                    value={myMessage} onChangeText={setMyMessage}
                ></TextInput>
                <Pressable style={style.btn} onPress={sendMyMessage}>
                    <Text>Send</Text>
                </Pressable>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TextInput placeholder='Your Message' style={style.input}
                    value={urMessage} onChangeText={setUrMessage}
                ></TextInput>
                <Pressable style={style.btn} onPress={sendUrMessage}>
                    <Text>Send</Text>
                </Pressable>

            </View>
        </View>
    )
    
}
const style=StyleSheet.create({
    input:{borderColor:'grey',borderRadius:10,borderWidth:1,width:400,padding:10,margin:10},
    btn:{backgroundColor:'cyan',borderRadius:2,padding:10,margin:10}
    
        
})