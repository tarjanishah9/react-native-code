import {View,Text,TextInput,StyleSheet, Pressable, ActivityIndicator} from 'react-native'
import { use, useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker'


export default function App(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const [gender,setGender]=useState("");
    const [terms,setTerms]=useState(false);
    const [dob,setDob]=useState(new Date());
    const [city,setCity]=useState("Ahmedabad");
    const [datePick,showDate]=useState(false);
    const [error,setError]=useState("");
    const [load,showLoad]=useState(false);
 
    const submitForm=()=>{
      if(name==="" || email==="" || pwd==="")
        setError("All fields must be filled")
      else if(!email.includes("@") && !email.includes("."))
        setError("Please enter correct e-mail")
      else if(pwd.length<8)
        setError("Password length is too short")
      else if(gender==="")
        setError("Please select gender")
      else if(!terms)
        setError("Please select conditions")
      else
        {
          showLoad(true)
        setTimeout(()=>{
          showLoad(false)
          alert("Data added succesfully")

        },5000)
        }


    }
 
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Enter Name :</Text>
            <TextInput
            style={styles.textbox}
            placeholder='Your Name' value={name} onChangeText={setName}></TextInput>
            <Text style={styles.text}> Enter E-mail :</Text>
            <TextInput 
            style={styles.textbox}
            placeholder='Your Email' value={email} onChangeText={setEmail}
                keyboardType='email-address'
            ></TextInput>
             <Text style={styles.text}> Enter Password :</Text>
            <TextInput 
            style={styles.textbox}
            placeholder='Your Password' value={pwd} onChangeText={setPwd}
                //secureTextEntry
            ></TextInput>
            <Text style={styles.error}>{error}</Text>
            <Text style={styles.text}>Gender: </Text>
            {['Male', 'Female'].map(item => (
          <Pressable
            key={item}
            onPress={() => setGender(item)}
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                borderWidth: 2,
                marginRight: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {gender === item && (
                <View
                  style={{ 
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'black',
                  }}
                />
              )}
            </View>
            <Text>{item}</Text>
          </Pressable>
        ))}
     <Text>Select City :</Text>
            <Picker selectedValue={city}
            onValueChange={setCity}
            >
                <Picker.Item label='Ahmedabad' value="Ahmedabad"></Picker.Item>
                <Picker.Item label='Surat' value="Surat"></Picker.Item>
                <Picker.Item label='Baroda' value="Baroda"></Picker.Item>
            </Picker>
            <Text>DOB:</Text>
            <Pressable onPress={()=>
                showDate(true)
            }><Text>{dob.toDateString()}</Text>


            </Pressable>
            {datePick && (<DateTimePicker
            value={dob}
            mode='date'
            onChange={(event,selectedDate)=>{
                showDate(false);
                if(selectedDate)
                    setDob(selectedDate)

            }}></DateTimePicker>)}
           <Pressable
          onPress={() => setTerms(!terms)}
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 2,
              marginRight: 8,
              backgroundColor: terms ? 'black' : 'white',
            }}
          />
          <Text>Accept Terms & Conditions</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={submitForm}>
        
          {load && (<ActivityIndicator color="white"></ActivityIndicator>)}
          <Text>Register</Text>
        </Pressable>
      

        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#FFFFFF'
    },
    error:{ fontSize:14,
        color:'red',},
    text:{
        fontSize:14,
        color:'#345678',
        
    },
    button:{borderRadius:10,backgroundColor:'green',
        borderWidth:2,borderColor:'black',height:40,justifyContent:'center',alignItems:'center'},
    textbox:{borderRadius:5,
        borderWidth:1,
        padding:10,
        marginBottom:10,

    },
    gender:{
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:2,
        margin:10,
        alignItems:'center',
        justifyContent:'center'        
    },
    genderSelect:{
        width:10,
        height:10,
        borderRadius:5,
        borderWidth:2,
        borderColor:'black'
    },
    term:{  width:20,
        height:20,
      
        borderWidth:2,
        margin:10,
        alignItems:'center',
        
        justifyContent:'center'}
});