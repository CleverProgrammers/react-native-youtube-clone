import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Footer() {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "white"
    }
})
