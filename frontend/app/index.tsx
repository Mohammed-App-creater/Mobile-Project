import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Img from "../assets/images/images";

const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/signIn");
  };
 
  
  return (
    <LinearGradient
      colors={["#010101", "#16254b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image source={Img.Robot} style={{ width: 150, height: 150 }} />
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>
          Your journey starts here. Let's get started!
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};



export default Welcome;
