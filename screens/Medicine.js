import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from "../components/NavigationBar"; // Import the custom NavigationBar component
const Medicine = () => {
  return (
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meds Screen</Text>
    </View>
    {/* <NavigationBar /> */}
    </>
  );
};

export default Medicine;
