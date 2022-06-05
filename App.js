import React,{useState, useEffect} from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
const [toggle, setToggle] = useState(false);

const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

useEffect(()=>{
  //liga o flash do celular
  Torch.switchState(toggle);
  //console.log('Trocou o estado do flash');
  },[toggle]);

useEffect(()=>{
  const subscription = RNShake.addListener(() =>{
    setToggle(oldToggle => !oldToggle);
  });
  //Essa função vai ser chamada quando
  //for ser desmontdo
  return () => subscription.remove();
},[]);

return (
  <View style={toggle ? style.containerLight:style.container} >
    <TouchableOpacity onPress ={handleChangeToggle } >
      <Image 
      style ={toggle?style.lightiningOn:style.lightiningOff}
      source ={toggle
        ?require('C:/Users/tadeu/projects/dio/flashlight_test/android/assets/icons/eco-light.png')
        :require('C:/Users/tadeu/projects/dio/flashlight_test/android/assets/icons/eco-light-off.png')
      }/>
      <Image 
      style ={style.dioLogo}
      source ={toggle
        ?require('C:/Users/tadeu/projects/dio/flashlight_test/android/assets/icons/logo-dio.png')
        :require('C:/Users/tadeu/projects/dio/flashlight_test/android/assets/icons/logo-dio-white.png')
      }/>
    </TouchableOpacity>
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent:'center',
  },
  containerLight: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightiningOn:{
      resizeMode: 'contain',
      alignSelf:'center',
      width:150,
      height:150,
  },
  lightiningOff:{
    resizeMode: 'contain',
    alignSelf:'center',
    tintColor:'white',
    width:150,
    height:150,
},
  dioLogo:{
    resizeMode: 'contain',
    alignSelf:'center',
    width:250,
    height:250,
  },
});