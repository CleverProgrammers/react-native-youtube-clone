import React from 'react'
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconIcon from 'react-native-vector-icons/Ionicons'




function Header() {

    const menuIcons = [
        {
            component: <Icon  style={styles.icon} name="chromecast" size={25} color="white" />
        },
        {
            component: <IconIcon style={styles.icon} name="md-notifications-outline" size={25} color="white" />
        },
        {
            component: <IconIcon style={styles.icon} name="search" size={25} color="white" />
        },
        {
            component: <Image style={styles.user} source={require("../assets/user.png")} />
        },
    
    ]

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
            </View>
            <View style={styles.headerOptions}>
                {menuIcons.map((icon, index) => 
                    <TouchableOpacity key={index}>
                        {icon.component}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingBottom: 10,
        flexDirection: "row"
    },
    headerOptions: {
        flexDirection: "row"
    },
    user: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    icon: {
        marginRight:  18
    },
    logo: {
        height: 25,
        width: 125
    }

})
