import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Image ,SafeAreaView ,ScrollView,Platform} from 'react-native';
import {pictures} from './data';

const  Card  = ({name, decription, image, size}) =>{
 return (
    <View style = {{
      backgroundColor: 'grey',
      padding:15,
      borderRadius: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin:5,
      
      
      }}>
      <Text>{name}</Text>
      <Image 
      style ={{width:360,height:420,borderRadius: 40,}}
      source={{uri:image}}
      />
    </View>
  )
}



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open new  app!</Text>
      <ScrollView style={{marginTop:Platform.OS === 'android'&& 30}}>
      {pictures.map((item,i)=>{
        return (
          <View>
          <Card key={i}
       {...item}
      />
     </View>
        )
      })}
      
      </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
