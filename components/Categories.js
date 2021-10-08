
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import CategoryButton from "./CategoryButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

{/* Jessy: Add feature of changing bgcolor of button */}

export default function Categories() {
    
  return (
    <View style={{
        backgroundColor: "#202121",
        paddingLeft: 6,
        flexDirection: 'row',
        alignItems: "center", 
        borderTopColor: "#5C5C5C",
        borderTopWidth: 1, 
        borderBottomColor: "#5C5C5C",
        borderBottomWidth: 1,
        paddingVertical: 6     
        }}>    
        <TouchableOpacity >
            <View style={{
                backgroundColor: "#2D2F28",
                flexDirection: "row",
                alignItems: "center",
                height: 33,
                paddingHorizontal: 4,
                marginHorizontal: 4,
                borderRadius: 4,
            }}>
            <MaterialIcons 
                name="explore"
                size={25}
                style={{                       
                    color: "white",                  
                }} />
            <Text style={{color: "white"}}> Explore </Text>                    
        </View>
        </TouchableOpacity>    
        <CategoryButton text="All" />
        <CategoryButton text="Sales" />
        <CategoryButton text="Startup company" />
    </View>
  );
}

