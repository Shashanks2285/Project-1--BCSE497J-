
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, SafeAreaView, View } from "react-native";
// import ProfileScreen from "./screens/ProfileScreen";
// import Main from "./screens/Main";
// import Medicine from "./screens/Medicine";
// import Bot from "./screens/Bot";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NavigationBar from "./components/NavigationBar"; // Import the custom NavigationBar component
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState } from "react";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.content}>
          
//           <Stack.Navigator initialRouteName={ "Profile" } screenOptions={{ headerShown: false }}>
            
//               <>
//                 <Stack.Screen name="Profile" component={ProfileScreen} />
//                 <Stack.Screen name="Main" component={Main} />
//                 <Stack.Screen name="Medicine" component={Medicine} />
//                 <Stack.Screen name="Bot" component={Bot} />
//               </>
            
//           </Stack.Navigator>
//           <NavigationBar />
//         </View>
//         <StatusBar style="auto" />
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     flex: 1,
//   },
// });

// export default App;