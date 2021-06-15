import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({title, onPress}) => (
   <TouchableOpacity style={styles.container} onPress={onPress}>
     <Text>
       {' '}
       {title}
       {' '}
     </Text>
   </TouchableOpacity>       
);

const styles = StyleSheet.create({
container:{
   alignItems: 'center',
   justifyContent: 'center' ,
   borderWidth: 1,
   borderColor: 'black',
   borderRadius: 5,
   paddingVertical: 5,
   paddingHorizontal: 10      
}
});
export default Button;