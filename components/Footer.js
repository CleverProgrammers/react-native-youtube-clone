import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import AntDesignIcon  from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


function Footer() {

    const menuIcons = [
        {
            component: <Icon  style={styles.icon} name="home" size={25} color="white" />,
            text: "Home"
        },
        {
            component: <Icon  style={styles.icon} name="youtube" size={25} color="white" />,
            text: "Shorts"
        },
        {
            component: <AntDesignIcon  style={styles.icon} name="pluscircleo" size={32} color="white" />

        },
        {
            component: <MaterialIcon  style={styles.icon} name="subscriptions" size={25} color="white" />,
            text: "Subscriptions"
        },
        {
            component: <MaterialIcon  style={styles.icon} name="video-library" size={25} color="white" />,
            text: "Library"
        },
    ]

    return (
        <View style={styles.container}>
            {menuIcons.map((icon, index)=>
                <TouchableOpacity style={styles.buttonContainer} key={index}>
                    <View style={styles.button}>
                        {icon.component}
                        { icon.text && 
                            <Text style={styles.buttonText}>{icon.text}</Text>
                        }
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: "row",
        borderTopColor: "#363736",
        borderTopWidth: 1
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 10
    },
    button: {
        alignItems: "center"
    }
})
