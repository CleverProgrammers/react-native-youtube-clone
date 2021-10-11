import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import Video from './Video'

function Videos({ setModalVisible, setVideo }) {

    const [videos, setVideos ] = useState([])

    const loadVideosList = async () => {
        const API_KEY = "AIzaSyDJ3iAHScYlxS3sV9PA652GV_Cg3ilNJAk";
        const ytMaxRecords = 10;
        const ytSortBy = "relevance";
        const ytType = "video"
        let url = `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&order=${ytSortBy}&type=${ytType}&key=${API_KEY}&maxResults=${ytMaxRecords}&q=cleverprogrammer`

        await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
          })
            .then(response => response.json())
            .then((res) => {
                setVideos(res.items)
            })
    }

    const selectVideo = (video) => {
        setModalVisible(true);
        setVideo(video);
    }

    useEffect(()=>{
        loadVideosList()
    }, [])

    return (
        <ScrollView style={styles.container}>
            {videos.map((video, index) => 
                <TouchableOpacity 
                    onPress={()=>selectVideo(video)}
                    key={index}>
                    <Video 
                        videoObj={video}
                    />
                </TouchableOpacity>
            )}
        </ScrollView>
    )
}

export default Videos

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})
