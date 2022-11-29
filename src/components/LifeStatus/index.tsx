import React from "react";
import { StyleSheet, View } from "react-native";

import Lottie from "lottie-react-native";

const LifeStatus: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require("../../assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.education}
      />
      <Lottie
        source={require("../../assets/money/money-100.json")}
        autoPlay
        loop
        style={styles.money}
      />

      <Lottie
        source={require("../../assets/robot/robot-100-100.json")}
        autoPlay
        loop
        style={styles.robot}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  education: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: "absolute",
  },
  money: {
    width: 100,
    marginTop: 50,
    marginLeft: 95,
    position: "absolute",
  },
  robot: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },
});
export default LifeStatus;
