import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type IButton = {
  text: string;
  handlePress: () => void;
  width: number;
  height: number;
};
const Button = ({ text, handlePress, width, height }: IButton) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Button;
