import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();

  const buttons = [
    { title: 'Profile', route: 'Profile' },
    { title: 'Main', route: 'Main' },
    { title: 'Medicine', route: 'Medicine' },
    { title: 'Bot', route: 'Bot' },
  ];

  return (
    <View style={styles.navbar}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navButton}
          onPress={() => navigation.navigate(button.route)}
        >
          <Text style={styles.navButtonText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 9,
    backgroundColor: '#white',
    borderTopColor: '#fff',
    // elevation: 15,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
    marginHorizontal: 1,
    // backgroundColor: '#white',
    // borderRadius: 8
  },
  navButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 15
  },
});

export default NavigationBar;
