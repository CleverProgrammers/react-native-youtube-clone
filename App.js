import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Modal, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Videos from "./components/Videos";
import Footer from './components/Footer'
import VideoModal from "./components/VideoModal";

export default function App() {

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ video, setVideo ] = useState({})

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle={"fullScreen"}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          >
            <VideoModal
                video={video}
                setModalVisible={setModalVisible}
            />
        </Modal>
        <Header />
        {/* Header */}
        <Categories />
        <Videos
          setVideo={setVideo}
          setModalVisible={setModalVisible}
        />
        {/* Video List */}
        <Footer />
        {/* Footer */}
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202121",
    display: "flex", 
    flexDirection: "column",
    flex: 1
  },
});
