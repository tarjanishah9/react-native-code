// import React, { useState } from "react";
// // npx expo install expo-checkbox
// import CheckBox  from "expo-checkbox";
// //npx expo install react-native-paper
// import {RadioButton} from 'react-native-paper' 
// import {Pressable,View, Text, StyleSheet, Button, } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function App() {
//     const [checkedMusic,setCheckedMusic]=useState(false);
//     const [checkedCricket,setCheckedCricket]=useState(false);
//     const [checkedRead,setCheckedRead]=useState(false);
//     const [checked,setChecked]=useState(false);
//     const [data,setData]=useState("");
//     const[selected,setSelected]=useState('female');
//     const sem=["Sem 1","Sem 2","Sem 3","Sem 4","Sem 5","Sem 6"];

// const styles=StyleSheet.create({
//     check:{
//         width:20,
//         height:20,
//         borderWidth:2,
//         borderColor:"#111",
//         backgroundColor:checked?'#111':'#76FF44',
      

//         margin:10,

//     },
//     outer:{
//         width:20,
//         height:20,
//         borderRadius:10,
//         borderColor:'#222',
//         borderWidth:2,
//         margin:10,
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     inner:{
//         width:10,
//         height:10,
//         borderRadius:5,
      
//         backgroundColor:'#222',
     

//     }
// })
//         return(
//         <SafeAreaView>
//             <Text>Hobby : </Text>
//             <View>
//                 <RadioButton.Group value={selected} onValueChange={setSelected}>
//                     <RadioButton.Item label="Male" value="male"></RadioButton.Item>

//                     <RadioButton.Item label="Female" value="female"></RadioButton.Item>

//                 </RadioButton.Group>
//                 <Text>Gender : {selected}</Text>


//                 {/* <View style={{flexDirection:"row"}}>
//                     <CheckBox 
//                         value={checkedMusic} onValueChange={setCheckedMusic} color={checked?'#123':'#665533'}>

//                     </CheckBox>
//                     <Text>Music</Text>
//                 </View>
//                 <View style={{flexDirection:"row"}}>
//                     <CheckBox 
//                         value={checkedCricket} onValueChange={setCheckedCricket} color={checked?'#123':'#665533'}>

//                     </CheckBox>
//                     <Text>Cricket</Text>
//                 </View>
//                 <View style={{flexDirection:"row"}}>
//                     <CheckBox 
//                         value={checkedRead} onValueChange={setCheckedRead} color={checked?'#123':'#665533'}>

//                     </CheckBox>
//                     <Text>Reading</Text>
//                 </View>
             
//              </View>
//             <View>
//                 <Pressable onPress={()=>{setChecked(!checked);
                  
//                 }}
//                     style={{flexDirection:'row',alignItems:'center'}}>
//                     <View style={styles.check}>

                       
//                     </View>
//                     <Text>I agree with Terms & Conditions.</Text>
//                 </Pressable>
//                 <Button title="Click" onPress={()=>{  
//                     let temp="";
//                     if(checkedCricket)
//                        temp+="Criecket Seleted..";
//                     if(checkedMusic)
//                        temp+="Music Seleted..";
//                     if(checkedRead)
//                        temp+="Reading Seleted..";

//                     setData(temp);


//                     // if(!checked)
//                     //     alert("Please select Terms & Cond.");
//                     // else
//                     //     console.log("Go to next page.");
//                     }}></Button> */}
//             <View style={{padding:20}}>
//                 <Pressable style={{flexDirection:'row',alignItems:'center',margin:10}}
//                     onPress={()=>setSelected('male')}>
//                     <View style={styles.outer}>
//                         {selected==='male' ?  <View style={styles.inner} ></View>: null}
//                     </View>
//                     <Text>Male</Text>
//                 </Pressable>
//                 <Pressable style={{flexDirection:'row',alignItems:'center',margin:10}}
//                     onPress={()=>setSelected('female')}>
//                     <View style={styles.outer}>
//                         {selected==='female' ?  <View style={styles.inner} ></View>: null}
//                     </View>
//                     <Text>Female</Text>
//                 </Pressable>



//             </View>
//             <View style={{padding:5}}>
//                 {sem.map(item=>
//                 <Pressable
//                 key={item}
//                 style={{flexDirection:'row',alignItems:'center',margin:10}}
//                     onPress={()=>setSelected(item)}>
//                     <View style={styles.outer}>
//                         {selected===item ?  <View style={styles.inner} ></View>: null}
//                     </View>
//                     <Text>{item}</Text>
//                 </Pressable>
//                 )}
//                 </View>

//             </View>
//             <Text>{data}</Text>

//         </SafeAreaView>
//     );

// }
