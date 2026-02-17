// import {View, Text, StyleSheet, Switch} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// //npx expo install @react-native-community/slider
// import Slider from '@react-native-community/slider'
// export default function App(){
//     const [sw,setSw]=useState(false);
//     const [value,setValue]=useState(50);
//     return (
//         <SafeAreaView>
//             <View style={{flexDirection:'row'}}>
//                 <Text>Wifi</Text>
//                 <Switch value={sw}
//                     onValueChange={setSw}
//                     trackColor={{false:"#765566",true:"#456789"}}
//                     thumbColor={sw?"#543553":"#98FF55"}
//                 ></Switch>
//                 <Text>{sw ? "ON" : "OFF"}</Text>
//             </View>
//             <View>
//                 <Slider 
//                     minimumValue={1}
//                     maximumValue={100}
//                     value={value}
//                     onValueChange={setValue}
//                     step={5}
//                     thumbTintColor="#998877"
//                     minimumTrackTintColor="#223344"
//                     maximumTrackTintColor="#664422"
//                 ></Slider>
//                 <Text>Value : {value}</Text>
//             </View>
//         </SafeAreaView>

//     );
// }