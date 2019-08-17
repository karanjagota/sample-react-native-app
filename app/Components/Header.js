import React from 'react';
import { View, Image ,StatusBar, StyleSheet , Dimensions} from 'react-native';
import Loop from './Loops';

class Header extends React.Component{
    render(){
        return(
            <View> 
                <StatusBar translucent={true} backgroundColor={'transparent'} />
                <Image style= {styles.imagestyle} source = {require('../assets/image.jpeg')} />
           </View>
        );
    }
}
const styles = StyleSheet.create({
    imagestyle:{
        width:Dimensions.get('screen').width,
        height:(Dimensions.get('screen').height/2)
    }
});
export default Header;  