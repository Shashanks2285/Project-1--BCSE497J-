import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Main from "./screens/Main";
import Medicine from "./screens/Medicine";
import Bot from "./screens/Bot";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationBar from "./components/NavigationBar"; // Import the custom NavigationBar component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* Content Area */}
        <View style={styles.content}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Medicine" component={Medicine} />
            <Stack.Screen name="Bot" component={Bot} />
          </Stack.Navigator>
        </View>

        {/* Always-visible Navigation Bar */}
        <NavigationBar />

        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
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
