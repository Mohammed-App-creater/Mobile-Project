import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import PrimaryButton from "../components/primeryButten";

import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Img from "../assets/images/images";
import OauthButton from "@/components/OauthButton";
import FormInput from "@/components/FormInput";
import PasswordInput from "@/components/FormPasswordInput";

const Index = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Success", "Form is valid!");
      // You can add actual sign-in logic here
    }
  };

  return (
    <LinearGradient
      colors={["#010101", "#16254b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Sing in</Text>
          <Text style={styles.secondaryTitle}>Access to your account</Text>
        </View>
        <Image source={Img.Robot} style={{ width: 120, height: 120 }} />
      </View>

      <View>
        <FormInput
          placeholder="Email"
          onChange={(e) => setEmail(e.nativeEvent.text)}
          icon={<FontAwesome6 name="user" size={20} color="#8a8a8a" />}
        />
        <PasswordInput
          placeholder="Password"
          onChange={(e) => setPassword(e.nativeEvent.text)}
          leftIcon={<MaterialIcons name="lock" size={22} color="#8a8a8a" />}
          visibleIcon={<AntDesign name="eye" size={22} color="#8a8a8a" />}
          hiddenIcon={<AntDesign name="eyeo" size={22} color="#8a8a8a" />}
        />
        <PrimaryButton title="Sign in"  handleSubmit={handleSubmit} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ ...styles.secondaryTitle, fontSize: 12 }}>
          Or Sign In With
        </Text>
      </View>
      <View>
        <OauthButton image={Img.Apple} name={"Apple"} />
        <OauthButton image={Img.Google} name={"Google"} />
        <OauthButton image={Img.Microsoft} name={"Microsoft"} />
      </View>
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
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  secondaryTitle: {
    width: "80%",
    color: "#8a8a8a",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
});

export default Index;
