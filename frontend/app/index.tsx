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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    color: "#8a8a8a",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Welcome;
