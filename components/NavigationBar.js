import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();

  const buttons = [
    { title: 'Home', route: 'Home' },
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
    paddingVertical: 10,
    backgroundColor: '#333',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#444',
    borderRadius: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NavigationBar;
