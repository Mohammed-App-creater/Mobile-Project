import { Text, View, StyleSheet } from "react-native";
import type { ReactNode } from "react";

export const Brainstorming = ({
  icon,
  idea1,
  idea2,
  color,
}: {
  icon: ReactNode;
  idea1: string;
  idea2: string;
  color: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.icon, backgroundColor: color, borderRadius: "100%"}}>
        { icon}
      </View>
      <View style={styles.ideaBox}>
        <View style={styles.dot}></View>
        <Text style={styles.text}>{idea1}</Text>
      </View>
      <View style={styles.ideaBox}>
        <View style={styles.dot}></View>
        <Text style={styles.text}>{idea2}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  icon: {
    display: "flex",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    
  },
  ideaBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
    paddingVertical: 14,
    paddingHorizontal: 23,
    backgroundColor: "rgba(6, 5, 5, 0.73)",
    borderRadius: 100,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "rgb(136, 60, 151)",
  },
  text: {
    fontSize: 14,
    color: "rgb(206, 206, 206),",
    fontWeight: "300",
  },
});
