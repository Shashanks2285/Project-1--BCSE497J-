import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.header}>Med Guide 🩺</Text>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    navbar: {
        paddingTop: 28,
        paddingBottom: 8,
        elevation: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#000",
        backgroundColor: "white"
    },
    header: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    }
})