import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity , Dimensions } from 'react-native';


class  TEvents extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:0}
        }
    changedata = ()=>{this.setState({ value: this.state.value + 1 });};
    render(){
        return(
            <View>
                <Text style={styles.counter}> 
                    {`Counter value is ${this.state.value}`}
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.changedata} >
                    <Text> Click Me  </Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text> Back To Home </Text>
                </TouchableOpacity>    
                 </View>
        );
    }
}
const styles = StyleSheet.create({
    counter:{
        fontSize:15,
        color:'black',
        backgroundColor:'#D3D3D3',
        margin:10,
        padding:10
      },
      button:{
        width:'40%',
        height:'17%',
        alignItems: 'center',
        padding:15,
        color:'black',
        backgroundColor:'#D3D3D3',
        marginLeft:(Dimensions.get('screen').width/3),
        marginTop:15
      }
});
export default TEvents;