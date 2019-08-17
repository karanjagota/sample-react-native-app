import React from 'react';
import { View , Text , StyleSheet, TouchableOpacity,Dimensions } from 'react-native';

class  Loops extends React.Component{
    state = {
        data:['karan','gaurav','sahil','anu','natasha','akash','akhil','rohit']
    }
    render(){
        return(
        <View>
            {this.state.data.map((x)=><View key={x} >
                    <Text style={styles.row} onPress={()=>alert(`My Name is ${x}`)}>
                        {x}
                    </Text></View>)}

                    <TouchableOpacity style = {styles.button} onPress={()=>this.props.navigation.navigate('TEvents')} >
                         <Text> Screen 3 (Event) </Text>
                    </TouchableOpacity>         
        </View>
        );
    }
}
const styles = StyleSheet.create({
    row:{
        fontSize:15,
        color:'black',
        backgroundColor:'#D3D3D3',
        margin:10,
        padding:10
      },
      button:{
        width:'40%',
        height:'9%',
        alignItems: 'center',
        padding:15,
        color:'black',
        backgroundColor:'#D3D3D3',
        marginLeft:(Dimensions.get('screen').width/3),
        marginTop:15
      }
});
export default Loops;  