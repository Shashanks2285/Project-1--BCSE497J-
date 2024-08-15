import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { useState } from "react";
import BouncingDots from "./BouncingDots";
import logo from "./../assets/logo.png";

const DisplayMsg = ({messages, isAnswering}) => {
  return (
    <>
    {messages.length === 0 ? (
      <View style={[styles.view, styles.first]}>
        <Image style={styles.img} source={logo} fadeDuration={1000}/>
        <Text style={styles.firstText}>Introducing Medguide Chat Bot App! Engage in dynamic conversations and discover personalized medical queries.</Text>
      </View>
    ) : (
      <View style={styles.view}>
        <ScrollView style={styles.scroll}>
          {messages.map((message, index) => (
            <View key={index} style={message.sender === 'user' ? styles.user : styles.bot}>
              <Text style={[styles.texts, message.sender === 'user' ? styles.userText : styles.botText]}>{message.text}</Text>
            </View>
          ))}
          {isAnswering && (
            <View style={styles.loadingContainer}>
              <BouncingDots />
            </View>
          )}
        </ScrollView>
      </View>
    )}
     </>   
  )
};

export default DisplayMsg;

const styles = StyleSheet.create({
  first:{
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  img:{
    height: 70,
    width: 70,
    marginBottom: 20

  },
  firstText: {
    fontSize: 17,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10
  },
  view: {
    flex: 1,
    zIndex: -1,
  },
  scroll: {
    marginBottom: 20,
  },
  user: {
    alignSelf: "flex-end",
    margin: 10
  },
  bot: {
    margin: 10,
    alignSelf: "flex-start"
  },
  texts: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 8,
    maxWidth: "85%",
    fontSize: 16
  },
  userText: {
    backgroundColor: "lightgrey",
  },
  botText:{
    backgroundColor: "#f0f0f0"
  }
});
