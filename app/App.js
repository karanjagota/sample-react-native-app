import React from 'react';
import { View,Text , StyleSheet , Dimensions , TouchableOpacity} from 'react-native';
import Header from './Components/Header';
import Loops from './Components/Loops';
import TEvents from './Components/TEvents';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';


class App extends React.Component{
  render(){
  return (
    <View>
      <Header/>
      <TouchableOpacity style = {styles.button} onPress={()=>this.props.navigation.navigate('Loops')} >
        <Text>Screen 2 (Loops) </Text>
      </TouchableOpacity>     
    </View>
  );
}
}
const styles = StyleSheet.create({
    button:{
      width:'40%',
      height:'13%',
      alignItems: 'center',
      padding:15,
      color:'black',
      backgroundColor:'#D3D3D3',
      marginLeft:(Dimensions.get('screen').width/3),
      marginTop:15
    }
});

const AppNavigator = createStackNavigator(
{
  Home: App,
  Loops: Loops,
  TEvents:TEvents
}
);

export default createAppContainer(createSwitchNavigator({AppNavigator}));
