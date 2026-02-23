import { View,Text, StyleSheet, ScrollView } from "react-native";
export default function App(){
    return(
        <View style={{flex:1,padding:20}}>
            <ScrollView>
            <Text style={styles.item}>Item 1</Text> 
            <Text style={styles.item}>Item 2</Text> 
            <Text style={styles.item}>Item 3</Text> 
            <Text style={styles.item}>Item 4</Text> 
            <Text style={styles.item}>Item 5</Text> 
            <Text style={styles.item}>Item 6</Text> 
            <Text style={styles.item}>Item 7</Text> 
            <Text style={styles.item}>Item 8</Text> 
            <Text style={styles.item}>Item 9</Text> 
            <Text style={styles.item}>Item 10</Text> 
            <Text style={styles.item}>Item 1</Text> 
            <Text style={styles.item}>Item 2</Text> 
            <Text style={styles.item}>Item 3</Text> 
            <Text style={styles.item}>Item 4</Text> 
            <Text style={styles.item}>Item 5</Text> 
            <Text style={styles.item}>Item 6</Text> 
            <Text style={styles.item}>Item 7</Text> 
            <Text style={styles.item}>Item 8</Text> 
            <Text style={styles.item}>Item 9</Text> 
            <Text style={styles.item}>Item 10</Text>
            <Text style={styles.item}>Item 11</Text> 
            <Text style={styles.item}>Item 12</Text> 
            <Text style={styles.item}>Item 13</Text> 
            <Text style={styles.item}>Item 14</Text> 
            <Text style={styles.item}>Item 15</Text> 
            <Text style={styles.item}>Item 16</Text> 
            <Text style={styles.item}>Item 17</Text> 
            <Text style={styles.item}>Item 18</Text> 
            <Text style={styles.item}>Item 19</Text> 
            <Text style={styles.item}>Item 20</Text> 
            <Text style={styles.item}>Item 21</Text> 
            <Text style={styles.item}>Item 22</Text> 
            <Text style={styles.item}>Item 23</Text> 
            </ScrollView>          
        </View>
    )

}
const styles=StyleSheet.create({
    item:{backgroundColor:'green',borderRadius:10,borderWidth:3,width:100,borderColor:'white'}
})