import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { API_KEY } from "@env";
import { GoogleGenerativeAI } from "@google/generative-ai";

const InputBar = ({
  name,
  setName,
  isAnswering,
  setIsAnswering,
  setMessages,
  messages,
}) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const handleUserInput = (name) => {
    const newMessage = { text: name, sender: "user" };
    setMessages([...messages, newMessage]);
  };

  const generateResponse = async (text) => {
    try {
      const newQuestion = { text: text, sender: "user" };
      const newMessages = [...messages, newQuestion];
      setMessages(newMessages);
  
      setIsAnswering(true);
  
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = text;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const texts = response.text();
  
      const newAnswer = { text: texts, sender: "bot" };
      const updatedMessages = [...newMessages, newAnswer];
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setIsAnswering(false);
    }
  };
  

  const valueAssign = () => {
    if (!isAnswering) {
      handleUserInput(name);
      setName("");
      generateResponse(name);
    }
  };

  return (
    <View style={styles.inputbox}>
      <TextInput
        multiline
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Type your message..."
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.icondiv}
        disabled={isAnswering}
        onPress={valueAssign}
      >
        {isAnswering ? (
          <Ionicons
            name="stop-circle-outline"
            style={[styles.icons, styles.stop]}
            size={25}
          />
        ) : (
          <Ionicons name="arrow-up-outline" size={25} style={styles.icons} />
        )}
      </TouchableOpacity>

      <Text style={styles.text}>
        Chatly can make mistakes. Consider checking important information.
      </Text>
    </View>
  );
};

export default InputBar;

const styles = StyleSheet.create({
  inputbox: {
    position: "fixed",
    bottom: 10,
  },
  input: {
    width: "95%",
    alignSelf: "center",
    padding: 8,
    fontSize: 17,
    borderWidth: 1.3,
    borderColor: "gray",
    borderRadius: 10,
    paddingLeft: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 8,
  },
  icondiv: {
    position: "absolute",
    right: 15,
    top: 5,
  },
  icons: {
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 8,
  },
  stop: {
    backgroundColor: "transparent",
  },
});
