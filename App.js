

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, SafeAreaView, View } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
// import Main from "./screens/Main";
// import Medicine from "./screens/Medicine";
// import Bot from "./screens/Bot";
// import RegisterPage from './screens/Login&Register/Register';
// import LoginPage from './screens/Login&Register/Login';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NavigationBar from "./components/NavigationBar"; // Import the custom NavigationBar component
// import NavBar from "./components/NavBar";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState } from "react";

// const Stack = createNativeStackNavigator();

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);  // Loading state to ensure AsyncStorage check finishes first

//   const checkLoginStatus = async () => {
//     try {
//       // const loggedIn = await AsyncStorage.getItem('isLoggedIn');
//       const loggedIn = false;
//       setIsLoggedIn(JSON.parse(loggedIn));
//     } catch (error) {
//       console.error("Error fetching login status:", error);
//     } finally {
//       setLoading(false);  // Ensure loading finishes after checking login status
//     }
//   };

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   if (loading) {
//     // Optionally show a loading spinner or splash screen while checking login status
//     return null; // You can add a loading screen here
//   }
  

//   return (
//     <NavigationContainer>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.content}>
//           <NavBar />
//           <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//             {isLoggedIn ? (
//               <>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Main" component={Main} />
//                 <Stack.Screen name="Medicine" component={Medicine} />
//                 <Stack.Screen name="Bot" component={Bot} />
                
//               </>
//             ) : (
//               <>
//                 <Stack.Screen name="Login" component={LoginPage} />
//                 <Stack.Screen name="Register" component={RegisterPage} />
//               </>
//             )}
//           </Stack.Navigator>

//           {/* Show NavigationBar only when logged in */}
//           {isLoggedIn?<NavigationBar />:null}
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


// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, SafeAreaView, View } from "react-native";
// import ProfileScreen from "./screens/ProfileScreen";
// import Main from "./screens/Main";
// import Medicine from "./screens/Medicine";
// import Bot from "./screens/Bot";
// import RegisterPage from './screens/Login&Register/Register';
// import LoginPage from './screens/Login&Register/Login';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NavigationBar from "./components/NavigationBar"; // Import the custom NavigationBar component
// import NavBar from "./components/NavBar";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState } from "react";
// import Home from "./Home";
// const Stack = createNativeStackNavigator();

// function App() {
  
//   return (
    
//     <>
//     <NavBar />
//     <Home/>
//     </>
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
// import RegisterPage from './screens/Login&Register/Register';
// import LoginPage from './screens/Login&Register/Login';
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.content}>
          
//           <Stack.Navigator initialRouteName={ "Login" } screenOptions={{ headerShown: false }}>
            
//               <>
//                 <Stack.Screen name="Login" component={LoginPage} />
//                 <Stack.Screen name="Register" component={RegisterPage} />
//                 <Stack.Screen name="Profile" component={ProfileScreen} />
//                 <Stack.Screen name="Main" component={Main} />
//                 <Stack.Screen name="Medicine" component={Medicine} />
//                 <Stack.Screen name="Bot" component={Bot} />
//               </>
            
//           </Stack.Navigator>
//           {/* <NavigationBar /> */}
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


import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";
import Main from "./screens/Main";
import Medicine from "./screens/Medicine";
import Bot from "./screens/Bot";
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationBar from "./components/NavigationBar"; // Import the custom NavigationBar component
import RegisterPage from './screens/Login&Register/Register';
import LoginPage from './screens/Login&Register/Login';
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
const Stack = createNativeStackNavigator();

function App() {
  // This hook will give us the current active screen's route name
  const [currentRouteName, setCurrentRouteName] = useState("Login");

  // A function to track route changes
  const getCurrentRoute = (state) => {
    const route = state.routes[state.index]?.name;
    return route;
  };

  // Conditionally show or hide the NavigationBar based on the active route
  const shouldShowNavigationBar = !(currentRouteName === 'Login' || currentRouteName === 'Register');

  return (
    <>
    <NavBar/>
    <NavigationContainer
      onStateChange={(state) => {
        // When the state changes (navigation happens), update the current route name
        const route = getCurrentRoute(state);
        setCurrentRouteName(route);
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
            <>
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Register" component={RegisterPage} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Medicine" component={Medicine} />
              <Stack.Screen name="Bot" component={Bot} />
            </>
          </Stack.Navigator>

          {/* Conditionally render the NavigationBar based on the current route */}
          {shouldShowNavigationBar && <NavigationBar />}
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});

export default App;
