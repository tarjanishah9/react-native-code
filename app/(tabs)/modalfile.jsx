import {View,Text,Image,Pressable,StyleSheet, Modal} from 'react-native';
import {useState} from 'react'

export default function App(){
    const [visible,setVisible]=useState(false);

    return (

        <View style={{flex:1,padding:20}}>
            <View style={{flexDirection:'row'}}>

                <Pressable onPress={()=>setVisible(true)}>
                    <Image source={{uri:'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png'}}
                        style={{width:60,
                            height:60,
                            borderRadius:30,
                            borderWidth:1,
                            borderColor:'black',
                            margin:10
                        }}
                        
                        ></Image>
                </Pressable>
                

            
            <View style={{marginTop:15,marginLeft:5}}>
                    <Text style={style.text}>Name</Text>
                    <Text style={style.msg}>Message</Text>
                </View>
</View>

                    <Modal
                        visible={visible}
                        
                        animationType='slide'
                        onRequestClose={()=>setVisible(false)}
                    >
                        <View style={{backgroundColor:'rgba(0,0,0,0.6)',
                        flex:1,
                            justifyContent:'center',alignItems:'center'}}>
                            <View style={{alignItems:'center'}}>
                            <Image source={{uri:'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png'}}
                        style={{width:200,
                            height:200,
                           
                            borderWidth:1,
                            borderColor:'black',
                            margin:10
                        }}></Image>
                        <Pressable onPress={()=>setVisible(false)} style={{backgroundColor:'#234567',
                            borderRadius:2,padding:10,borderColor:"#665544"
                        }}>
                            <Text style={{color:"001122"}}>Close</Text>
                        </Pressable>

                            </View>


                        </View>


                    </Modal>
        </View>
    );

}
const style=StyleSheet.create({
    text:{fontWeight:'bold',
        fontSize:16,
    },
    msg:{
        fontSize:16, 
    }
})