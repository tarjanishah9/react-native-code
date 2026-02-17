
import {View,Text, TextInput,StyleSheet, Button,Alert } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from 'react';

export default function App(){
    function buttonClick(){
        Alert.alert('Click',"Welcome "+text,
                [
                    {text:"Yes",onPress:()=>
                       console.log("yes clicked")
                    },{text:"No",onPress:()=>
                        console.log("no clicked")}
                ]);
    }
    const [text, setText] = useState("");
    return (
        <SafeAreaView>
            <View>
                <Text>Hello World</Text>
                <TextInput placeholder='Enter value' style={styles.input} 
                onChangeText={setText}></TextInput>
                <Button title='Click Me' onPress={buttonClick}></Button>
                <Text>{text}</Text>

            </View>

        </SafeAreaView>
    );
}



const styles=StyleSheet.create({
    input:{borderRadius:2,
        borderColor:'black',
        borderWidth:1,
      
        margin:5,
    }
})