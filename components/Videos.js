import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Video from './Video'

function Videos() {
    return (
        <ScrollView style={styles.container}>
             <Video />
             <Video />
             <Video />
        </ScrollView>
    )
}

export default Videos

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})
