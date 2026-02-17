import { View,Text, Pressable } from "react-native";   
import {useState} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
//npx expo install @react-native-picker/picker
import {Picker} from '@react-native-picker/picker'
// npx expo install @react-native-community/datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker'

export default function App(){
    const [sem,setSem]=useState("Sem 1");
    const [datetime,setDateTime]=useState(new Date());
    const [dort,setDOrT]=useState('date');
    const [show,setShow]=useState(false);
    const onChangeDate=(event,selectedValue)=>{
        if(selectedValue){
            setShow(false);
            setDateTime(selectedValue);
        }
           
    };
    const showPicker=(p)=>
    {
        setDOrT(p);
        setShow(true);
    }
    return(
        <SafeAreaView>
            <View>
                <Text>Select Semester:</Text>
                <Picker selectedValue={sem} onValueChange={(item)=>{setSem(item)}}>
                    <Picker.Item label="Sem 1" value="Sem 1"></Picker.Item> 
                    <Picker.Item label="Sem 2" value="Sem 2"></Picker.Item> 
                    <Picker.Item label="Sem 3" value="Sem 3"></Picker.Item> 
                    <Picker.Item label="Sem 4" value="Sem 4"></Picker.Item> 
                    <Picker.Item label="Sem 5" value="Sem 5"></Picker.Item> 
                    <Picker.Item label="Sem 6" value="Sem 6"></Picker.Item> 

                </Picker>
                <Text>Your Semester : {sem}</Text>
                
                <Pressable onPress={()=>showPicker("date")}>
                <Text>Select Date : </Text>
                </Pressable>
                <Pressable onPress={()=>showPicker("time")}>
                <Text>Select Time : </Text>
                </Pressable>
               { show ?
                   <DateTimePicker value={datetime} onChange={onChangeDate} 
                    mode={dort} display="default"
                   >
                    </DateTimePicker>
               : null
            }
                <Text>{datetime.toLocaleDateString()}</Text>
                <Text>{datetime.toLocaleTimeString()}</Text>

            </View>
        </SafeAreaView>
    )
}