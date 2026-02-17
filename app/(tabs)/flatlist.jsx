import {View,Text,Image, Pressable,FlatList} from 'react-native'

export default function App(){
    const student=[
        {'id':1,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':2,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':3,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':4,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':5,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},
        
        {'id':6,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':7,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':8,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':9,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':10,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},
        {'id':11,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':12,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':13,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':14,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':15,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},
        {'id':16,'fname':'Jack','lname':'A.','url':'https://avatar.iran.liara.run/public/24'},
        {'id':17,'fname':'Jhony','lname':'B.','url':'https://avatar.iran.liara.run/public/16'},
        {'id':18,'fname':'John','lname':'C.','url':'https://avatar.iran.liara.run/public/44'},
        {'id':19,'fname':'Adam','lname':'D.','url':'https://avatar.iran.liara.run/public/17'},
        {'id':20,'fname':'Vince','lname':'E.','url':'https://avatar.iran.liara.run/public/42'},

    ]
    return (
        <View style={{padding:20}}>
            <FlatList
            numColumns={5}
                data={student}
                keyExtractor={(item)=>item.id}
                showsVerticalScrollIndicator={true}
                
                renderItem={({item})=>(
                    <View >
                   
                    <Image source={{'uri':item.url}} style={{marginRight:20,width:50,height:50,borderColor:'black'}}></Image>
                    <Text style={{color:'black'}}>{item.fname}</Text>
                    <Text style={{color:'black'}}> {item.lname}</Text>
                </View>
              
                )}
                
            >

            </FlatList>

        </View>
    )
}