import React from "react";
import {Text, Accordion,TextArea,Checkbox,TextInput,Button} from '@carbon/react-native';
import {StatusBar, View, StyleSheet,ScrollView} from 'react-native'

const SignScreen = ()=> {
    return(
        <View >
             <StatusBar backgroundColor="red" barStyle="light-content" />
             <View style = {style.heading_style}>
        <Text text="Create Account" style = {style.label_style}></Text>
        </View>
         <ScrollView >
        <View style = {{marginTop:20,backgroundColor:'white',marginRight:20,marginLeft:20, borderBottomWidth:0,borderRadius:10}}>
         <Accordion title = 'Teacher'>
            <Text text="Student" />
            <Text text="Teacher" style = {{paddingTop:15}}/>
        </Accordion>
        </View>
       
        <View style = {{marginTop:10,backgroundColor:'white',marginRight:20,marginLeft:20,borderLeftRadius:20,borderRightRadius:20}}>
            <Text text="First Name" style = {{marginLeft:10,paddingTop:10,color:'gray'}}/>
            <TextInput placeholder="First Name"  />
              <Text text="Last Name" style = {{marginLeft:10,paddingTop:10,color:'gray'}}/>
            <TextInput placeholder="Last Name" />
              <Text text="Email Address" style = {{marginLeft:10,paddingTop:10,color:'gray'}}/>
            <TextInput placeholder="Email Address"  />
              <Text text="Password" style = {{marginLeft:10,paddingTop:10,color:'gray'}}/>
            <TextInput placeholder="Password" />
              <Text text="Confirm Password" style = {{marginLeft:10,paddingTop:10,color:'gray'}}/>
            <TextInput placeholder="Confirm Password"  />
            <View style= {{flexDirection:'row'}}>
               <Checkbox  style={style.Checkbox}/>
               <Text text=" I agree with"></Text>
            </View>
            <Button text="Create Account"  onPress={() => {} }/>
        </View>
        </ScrollView>

        </View>

    )
};
const style = StyleSheet.create({
      View_style: {
        flex: 1,
    },
    label_style : {
        fontSize: 20,
        textAlign: 'center',
        color:'white',
        fontWeight:'700'  
    },
    heading_style: {
        backgroundColor:'red',
        paddingBottom:20,
        paddingTop:10, 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    text_area: {
    Color: 'red',
    borderWidth: 1,
    borderRadius: 5,
    },
    Checkbox: {
        borderColor:'red',
        paddingLeft:20,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], 
    },
    buttonText: {
     fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
     alignItems: 'center',
    },



});
  


export default SignScreen;