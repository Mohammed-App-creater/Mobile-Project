import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import PrimaryButton from "../components/primeryButten";
import axios from "axios";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Img from "../assets/images/images";
import FormInput from "@/components/FormInput";
import PasswordInput from "@/components/FormPasswordInput";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  

 

  return (
    <LinearGradient
      colors={["#010101", "#16254b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={{ ...styles.secondaryTitle, width: "80%" }}>
            Create a new account
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
        <PasswordInput
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          leftIcon={<MaterialIcons name="lock" size={22} color="#8a8a8a" />}
          visibleIcon={<AntDesign name="eye" size={22} color="#8a8a8a" />}
          hiddenIcon={<AntDesign name="eyeo" size={22} color="#8a8a8a" />}
        />
        <PrimaryButton
          title="Sign Up"
          error={error}
          handleSubmit={handleSubmit}
        />
      </View>
    </LinearGradient>
  );
};



export default SignUp;
