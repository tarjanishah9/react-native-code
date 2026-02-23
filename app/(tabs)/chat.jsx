import { useState } from 'react'
import {View,TextInput,FlatList,Pressable,Text, StyleSheet, ImageBackground} from 'react-native'

export default function App(){
    
    const [myMessage,setMyMessage]=useState("")
    const [urMessage,setUrMessage]=useState("")
   
    const [flat,setFlat]=useState([{}])
    const sendMyMessage=(isMyMessage)=>{
        if(isMyMessage){
            const data={'id':flat.length+1,'message':myMessage,'align':'right'}
            setFlat([...flat,data])
            setMyMessage("")
        }
        else{
            const data={'id':flat.length+1,'message':urMessage,'align':'left'}
            setFlat([...flat,data])
            setUrMessage("")
        }
       
    }
    return (
        <View style={{padding:20,flex:1}}>
            <View>
                <ImageBackground source={{'uri':'https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg'}}>
                <FlatList
            data={flat}
            style={{marginTop:10}}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                        <View style={{backgroundColor:'rgba(125,11,145,0.6)',
                        flex:1,padding:10}}>
                                 <Text style={{color:'black',
                                    textAlign:item.align==='left'?'left':'right'}}>{item.message}</Text>
                                
                                
                        </View> 
                  
                )}
            ></FlatList>
            </ImageBackground>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TextInput placeholder='My Message' style={style.input}
                    value={myMessage} onChangeText={setMyMessage}
                ></TextInput>
                <Pressable style={style.btn} onPress={()=>sendMyMessage(true)}>
                    <Text>Send</Text>
                </Pressable>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TextInput placeholder='Your Message' style={style.input}
                    value={urMessage} onChangeText={setUrMessage}
                ></TextInput>
                <Pressable style={style.btn} onPress={()=>sendMyMessage(false)}>
                    <Text>Send</Text>
                </Pressable>

            </View>
        </View>
    )
    
}
const style=StyleSheet.create({
    input:{borderColor:'grey',width:250,borderRadius:10,borderWidth:1,padding:10,margin:10},
    btn:{backgroundColor:'cyan',borderRadius:2,padding:10,margin:10}
    
        
})