import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Videos from "./components/Videos";
import Footer from './components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        {/* Header */}
        <Categories />
        <Videos />
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
