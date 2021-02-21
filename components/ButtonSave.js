import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const ButtonSave = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setState("reading")}
        style={styles.buttonSave}
      >
        <Text style={styles.btnSaveTxt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSave;
