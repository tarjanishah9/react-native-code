import {View,Text,Image, Pressable} from 'react-native'


export default function App(){
    const name=["Adam","Joy","Johny","Jack","Jim","Zen"] //Array
    const student=[
        {'roll':1,'fname':"Adam","lname":'A.',
            'profile':require('../../assets/images/icon.png')
        },
        {'roll':2,'fname':"Joy","lname":'B.',
            'profile':require('../../assets/images/icon.png')
        },
        {'roll':3,'fname':"Johny","lname":'C.',
            'profile':require('../../assets/images/icon.png')
        },
        {'roll':4,'fname':"Jim","lname":'D.',
            'profile':require('../../assets/images/icon.png')
        },
        {'roll':5,'fname':"Zen","lname":'E.',
            'profile':require('../../assets/images/icon.png')
        },

    ]
    const handleClick=(data)=>{
        alert(data + " clicked")
    }
    const studentClick=(s)=>{
        alert(s.roll + " "+s.fname)
    }

    return(
        <View style={{padding:20}}>
            {student.map((s)=>(

                <View key={s.roll} style={{flexDirection:'row',
                backgroundColor:'grey',padding:10}}>
                    <Image source={s.profile}
                        style={{width:50,height:50,borderRadius:25}}
                    ></Image>
                    <Text style={{marginRight:5,marginLeft:10,marginTop:10}}>{s.fname}</Text>
                    <Text style={{marginTop:10}}>{s.lname}</Text>
                </View>


            ))} 

             {name.map((data,index)=>(
                    <View style={{backgroundColor:'grey',padding:10}}>
                        <Text key={index}>{data}</Text>

                    </View>
              
            ))} 


        </View>
    )


}