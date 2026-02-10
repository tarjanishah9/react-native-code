import {View,Text,Image, Pressable} from 'react-native'

export default function App(){

    const name=["Jack","Jhony","John","Adam","Vince"]
    const student=[
        {'id':1,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':2,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':3,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':4,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':5,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},


    ]
    const listClick=(item)=>{
        alert(item +" is clicked")
    }
    const studentClick=(s)=>{
        alert(s.id + " "+ s.fname)
    }
    return(
        <View style={{padding:20,backgroundColor:'#999',flex:1}}>
            {student.map((s)=>(
                <Pressable onPress={()=>studentClick(s)}>
                <View key={s.id} style={{padding:10,backgroundColor:'#666',flexDirection:'row'}}>
                    
                    <Image source={{'uri':s.url}} style={{marginRight:20,width:50,height:50,borderColor:'black'}}></Image>
                    <Text style={{color:'black'}}>{s.fname}</Text>
                    <Text style={{color:'black'}}> {s.lname}</Text>
                </View>
                </Pressable>
            ))}
            {name.map((item,index)=>(
              <Pressable onPress={()=>listClick(item)}>
                <View style={{padding:10,backgroundColor:'#666'}}>
                    <Text key={index} style={{color:'black'}}>{item}</Text>

                </View>
                </Pressable>
                )

            )} 

        </View>
    )



}