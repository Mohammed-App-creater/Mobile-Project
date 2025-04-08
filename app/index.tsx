import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Robot from "../assets/images/Robot.png";
import Google from "../assets/images/Google.png";
import Apple from "../assets/images/Apple.png";
import Microsoft from "../assets/images/Microsoft-removebg-preview.png";

const Index = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  

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
        <Image source={Robot} style={{ width: 120, height: 120 }} />
      </View>
      <View>
      <View style={styles.inputWrapper}>
        <FontAwesome6 name="user" size={20} color="#8a8a8a" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#8a8a8a"
          style={styles.input}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputWrapper}>
      <MaterialIcons name="lock" size={22} color="#8a8a8a" style={styles.icon} />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#8a8a8a"
        secureTextEntry={!isPasswordVisible}
        style={styles.input}
      />

      <TouchableOpacity onPress={() => setIsPasswordVisible(prev => !prev)}>
        <AntDesign
          name={isPasswordVisible ? 'eye' : 'eyeo'}
          size={22}
          color="#8a8a8a"
        />
      </TouchableOpacity>
    </View>
        <Pressable style={styles.submitBtn}>
          <Text style={{ color: "white", fontSize: 16 }}>Sing in</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ ...styles.secondaryTitle, fontSize: 12 }}>
          Or Sign In With
        </Text>
      </View>
      <View>
        <Pressable style={styles.outhContaner}>
          <Image source={Apple} style={styles.outhImage} />
          <Text style={styles.outhText}>Apple</Text>
        </Pressable>
        <Pressable style={styles.outhContaner}>
          <Image source={Google} style={styles.outhImage} />
          <Text style={styles.outhText}>Google</Text>
        </Pressable>
        <Pressable style={styles.outhContaner}>
          <Image source={Microsoft} style={styles.outhImage} />
          <Text style={styles.outhText}>Microsoft</Text>
        </Pressable>
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderWidth: 0.4,
    borderColor: '#1269ff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
    width: 330
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: "#0b5be5",
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  outhContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    width: "80%",
    marginTop: 10,
    borderRadius: 30,
    padding: 15,
  },
  outhImage: {
    width: 30,
    height: 30,
  },
  outhText: {
    color: "white",
    width: "80%",
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 30,
    textAlign: "center",
  },
});

export default Index;
