import React, { useState } from "react";
import { Text, Image, ImageSourcePropType, Pressable, StyleSheet } from "react-native";

interface Props {
  image: ImageSourcePropType;
  name: string;
}

const OauthButton: React.FC<Props> = ({ image, name}) => {
  return (
    <Pressable style={styles.outhContaner}>
      <Image source={ image } style={styles.outhImage} />
      <Text style={styles.outhText}>{name}</Text>
    </Pressable>
  );
};

export default OauthButton;

const styles = StyleSheet.create({
  outhContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    width: "88%",
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
