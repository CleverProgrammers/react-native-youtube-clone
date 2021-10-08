import React, {  useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";

function CategoryButton(props) {   
    
    return (
        <>
         <TouchableOpacity >
            <View style={{
                backgroundColor: "#2D2F28",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 33,
                paddingHorizontal: 6,
                minWidth: 40,
                marginHorizontal: 6,
                borderRadius: 50,
            }}>
                <Text style={{color: "white"}}> {props.text} </Text>
            </View>   
            </TouchableOpacity> 
        </>           
    );
}

export default CategoryButton
