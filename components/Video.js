import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import moment from "moment";

function Video({ videoObj }) {

    return (
        <View style={styles.container}>
            <View style={styles.thumbnailContainer}>
                <Text style={styles.time}>15:45</Text>
                <Image style={styles.thumbnail} source={{ uri: `${videoObj.snippet.thumbnails.high.url}` }} />
            </View>
            <View style={styles.info}> 
                <Image style={styles.infoLogo} source={require("../assets/cp-logo.png")}/>
                <View style={styles.titles}>
                    <Text style={styles.videoTitle}>{videoObj.snippet.title}</Text>
                    <View style={styles.videoInfo}>
                        <Text style={styles.videoInfoText}>{videoObj.snippet.channelTitle} ·</Text>
                        <Text style={styles.videoInfoText}> 20K views · </Text>
                        <Text style={styles.videoInfoText}>{moment(videoObj.snippet.publishedAt).startOf('day').fromNow()}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Video

const styles = StyleSheet.create({
    container: {
        marginTop: 4
    },
    titles: {
        justifyContent: "center",
    },
    thumbnailContainer: {
        position: "relative"
    },
    time: {
        position: "absolute",
        color: "white",
        bottom: 4,
        right: 4,
        zIndex: 10, 
        fontSize: 12,
        backgroundColor: "black",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        overflow: "hidden"
    },
    videoTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 2
    },
    thumbnail: {
        height: 200,
        width: "auto"
    },
    info: {
        flexDirection: "row",
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    infoLogo: {
        height: 35,
        width: 30,
        marginRight: 12
    },
    videoInfo: {
        flexDirection: "row"
    },
    videoInfoText: {
        color: "gray"
    }
})
