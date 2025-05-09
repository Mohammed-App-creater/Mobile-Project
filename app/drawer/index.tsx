  import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Pressable,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  import Feather from "@expo/vector-icons/Feather";
  import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
  import Ionicons from '@expo/vector-icons/Ionicons';
  import Star from "@/assets/images/bling-line-design.svg";

  import { Link, useRouter } from "expo-router";

  import React from "react";
  import HomeHeader from "@/components/HomeHeader";
  import { Brainstorming } from "@/components/Brainstorming";

  const Home = () => {
    const ideas = [
      {
        icon: <MaterialIcons name="wb-sunny" size={30} color="white" />,
        idea1: "Explain quantum computing in simple terms",
        idea2: "How do I make HTTP in JavaScript",
        color: "rgb(136, 60, 151)",
      },
      {
        icon: <MaterialIcons name="code" size={30} color="white" />,
        idea1: "What is an API?",
        idea2: "How to use async/await",
        color: "rgb(50, 150, 200)",
      },
      {
        icon: <MaterialIcons name="memory" size={30} color="white" />,
        idea1: "Basics of AI",
        idea2: "How machine learning works",
        color: "rgb(220, 80, 120)",
      }
      
    ];
  const  router=useRouter()
    return (
      <LinearGradient
        colors={["#010101", "#16254b"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <HomeHeader />
        <View
          style={{ flex: 1, width: "100%", paddingTop: 16, paddingBottom: 16 }}
        >
          <View style={styles.GreetingBox}>
            <Text style={styles.GreetingTitle}>Hello, Ask Me Anything...</Text>
          </View>
        
          <View style={styles.mainBox}>
            <ScrollView>
              {ideas.map((item, index) => (
                <Brainstorming
                  key={index}
                  icon={item.icon}
                  idea1={item.idea1}
                  idea2={item.idea2}
                  color={item.color}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "rgb(1, 0, 12)",
            paddingBottom: 16,
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Pressable style={{ flexGrow: 1 }}>
            <Star width={25} height={25} />
          </Pressable>
          <Pressable style={{ flexGrow: 1 }}>
            <Feather name="image" size={24} color="#505056" />
          </Pressable>
          <Pressable style={{ flexGrow: 1 }}>
            <SimpleLineIcons name="microphone" size={24} color="#505056" />
          </Pressable>
          <TextInput
            style={{
              flexGrow: 11,
              padding: 15,
              borderRadius: 100,
              marginHorizontal: 5,
              backgroundColor: "rgb(9, 9, 10)",
              color: "rgb(203, 203, 203)",
            }}
            placeholder="Ask me anything..."
            placeholderTextColor={"#505056"}
          />
          <Pressable style={{ flexGrow: 1 }}>
            <Ionicons name="paper-plane-outline" size={24} color="#505056" />
          </Pressable>
        </View>
      </LinearGradient>
    );
  };

  export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
    GreetingBox: {
      width: "100%",
      paddingHorizontal: 16,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    GreetingTitle: {
      fontSize: 32,
      color: "white",
      wordWrap: "break-word",
      textAlign: "center",
      marginBottom: 16,
    },
    mainBox: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
      paddingVertical: 16,
    },

    text: {
      fontSize: 20,
      color: "#fff",
    },
  });
