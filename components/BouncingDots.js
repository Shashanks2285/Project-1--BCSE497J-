import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

const BouncingDots = ({ size = 10, color = "#000", duration = 1000 }) => {
  const translation1 = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const translation3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animations = [
      Animated.loop(
        Animated.sequence([
          Animated.timing(translation1, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translation1, {
            toValue: -1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translation1, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translation2, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translation2, {
            toValue: -1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translation2, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translation3, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translation3, {
            toValue: -1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(translation3, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
        ])
      ),
    ];

    animations.forEach(animation => animation.start());

    return () => {
      animations.forEach(animation => animation.stop());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.dot,
          {
            width: size,
            height: size,
            backgroundColor: color,
            transform: [
              {
                translateY: translation1.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [-size, 0, size],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {
            width: size,
            height: size,
            backgroundColor: color,
            transform: [
              {
                translateY: translation2.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [-size, 0, size],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {
            width: size,
            height: size,
            backgroundColor: color,
            transform: [
              {
                translateY: translation3.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [-size, 0, size],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default BouncingDots;
