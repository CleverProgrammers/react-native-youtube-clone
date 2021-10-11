import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { WebView } from 'react-native-webview';

function VideoModal({ video, setModalVisible }) {
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={{ backgroundColor: "black", height: 230 }}>
                    <WebView
                        allowsInlineMediaPlayback={true}
                        javaScriptEnabled={true}
                        source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}` }}
                        style={{ flex: 1, backgroundColor: "black" }}
                    /> 
                </View>
                <TouchableOpacity 
                    onPress={()=>setModalVisible(false)}
                >
                    <Icon name="chevron-thin-down" size={25} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: "red", height: 300 }}>
                    <Text>YOOOOO</Text>
                </View>
                <Text>GELLO</Text>
            </SafeAreaView>
        </View>
    )
}

export default VideoModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202121"
    }
})

