import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

import PrimaryButton from "../components/primeryButten";
import axios from "axios";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Img from "../assets/images/images";
import OauthButton from "@/components/OauthButton";
import FormInput from "@/components/FormInput";
import PasswordInput from "@/components/FormPasswordInput";
import {  Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const router = useRouter();

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and Password are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          { email, password }
        );
  
        if (response.status === 200) {
          router.replace("/");
        } else {
          Alert.alert("Login failed", "Invalid email or password");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        Alert.alert("Error", "Unable to login. Please try again later.");
      }
  
      setEmail("");
      setPassword("");
      setError("");
    }
  };

  const test = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user/test");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  test();

  return (
    <LinearGradient
      colors={["#010101", "#16254b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Sign in</Text>
          <Text style={{ ...styles.secondaryTitle, width: "80%" }}>
            Access to your account
          </Text>
        </View>
        <Image source={Img.Robot} style={{ width: 120, height: 120 }} />
      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <FormInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          icon={<FontAwesome6 name="user" size={20} color="#8a8a8a" />}
        />
        <PasswordInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          leftIcon={<MaterialIcons name="lock" size={22} color="#8a8a8a" />}
          visibleIcon={<AntDesign name="eye" size={22} color="#8a8a8a" />}
          hiddenIcon={<AntDesign name="eyeo" size={22} color="#8a8a8a" />}
        />
        <PrimaryButton
          title="Sign in"
          error={error}
          handleSubmit={handleSubmit}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.secondaryTitle, fontSize: 12 }}>
          Or Sign In With
        </Text>
      </View>
      <View>
        <OauthButton image={Img.Apple} name={"Apple"} />
        <OauthButton image={Img.Google} name={"Google"} />
        <OauthButton image={Img.Microsoft} name={"Microsoft"} />
      </View>
      <Text style={{ color: "gray",marginTop: 15,fontSize:20 }}>
        if you don't have an Account{" "} 
        <Link style={{ color: "white",fontWeight:'bold'}} href="/signup">
          Sign Up
        </Link>
      </Text>
      <Link style={{fontSize:20, color:"red"}} href='/drawer'><Text>drawer</Text></Link>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: -10,
  },
  secondaryTitle: {
    color: "#8a8a8a",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 10,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default Index;
