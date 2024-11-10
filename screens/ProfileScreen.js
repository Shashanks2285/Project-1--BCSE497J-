
import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from "../components/NavigationBar"; // Import the custom NavigationBar component
const ProfileScreen = () => {
  return (
    <>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Profile Details here</Text>
      {/* You can add more details or components here later */}
    </View>
    {/* <NavigationBar /> */}
    </>
  );
};

export default ProfileScreen;
