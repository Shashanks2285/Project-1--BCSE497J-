import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import DisplayMsg from "../components/DisplayMsg";
import InputBar from "../components/InputBar";
import { useState } from "react";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);

  const [messages, setMessages] = useState([]);


  return (
    <>
      <NavBar />
      <DisplayMsg messages={messages} isAnswering={isAnswering}/>
      <InputBar
        name={name}
        setName={setName}
        isAnswering={isAnswering}
        setIsAnswering={setIsAnswering}
        setMessages = {setMessages}
        messages = {messages}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
