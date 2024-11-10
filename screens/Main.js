import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from "../components/NavigationBar"; // Import the custom NavigationBar component
const Main = () => {
  return (
    <>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
    </View>
    {/* <NavigationBar /> */}
    </>
  );
};

export default Main;
