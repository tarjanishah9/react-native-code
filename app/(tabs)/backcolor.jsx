// import {View, Text, StyleSheet, Switch} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// //import Slider from "@react-native-community/slider";
// import { Button } from "react-native";

// export default function App(){
//     const [red,setRed]=useState(0);
//     const [green,setGreen]=useState(0);
//     const [blue,setBlue]=useState(0);
//     const [color,setColor]=useState('rgb(255,255,255)');
  
//     return (
//         <SafeAreaView style={{flex:1}}>
//             <View style={{backgroundColor:color,flex:1}}>
                
//                 <Text>Red: </Text>
//                 <Slider minimumValue={0}
//                     maximumValue={255}
//                     value={red}
//                     step={1}
//                     onValueChange={setRed}

//                 ></Slider>
//                 <Text>Green: </Text>
//                 <Slider minimumValue={0}
//                     maximumValue={255}
//                     value={green}
//                     step={1}
//                     onValueChange={setGreen}
                    
//                 ></Slider>
//                 <Text>Blue: </Text>
//                 <Slider minimumValue={0}
//                     maximumValue={255}
//                     value={blue}
//                     step={1}
//                     onValueChange={setBlue}
                    
//                 ></Slider>
//                 <Button title="Set Background" onPress={
//                     ()=> setColor(`rgb(${red},${green},${blue})`)}
//                 ></Button>
//                 <Text>Red : {red} </Text>
//                 <Text>Green : {green} </Text>
//                 <Text>Blue : {blue} </Text>
//                 <Text>Color  : {color}</Text>

//             </View>

//         </SafeAreaView>

//     );
// }