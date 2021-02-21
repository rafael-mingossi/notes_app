import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const ButtonPlus = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setState("updating")}
        style={styles.buttonPlus}
      >
        <Text style={styles.btnPlusTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPlus;
