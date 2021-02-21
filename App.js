import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import Header from "./components/Header";
//import ButtonPlus from "./components/ButtonPlus";
//import ButtonSave from "./components/ButtonSave";

const App = () => {
  //defining state variable for reading notes
  const [state, setState] = useState("reading");
  //defining state variable for writing notes
  const [notes, setNotes] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  );

  //validating which state is the current one
  if (state == "reading") {
    return (
      <View style={styles.mainView}>
        <Header />
        <View style={styles.notesView}>
          <Text style={styles.notesTxt}>{notes}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setState("updating")}
          style={styles.buttonPlus}
        >
          <Text style={styles.btnPlusTxt}>+</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (state == "updating") {
    return (
      <View style={styles.mainView}>
        <Header />

        <TextInput
          style={styles.txtInput}
          onChangeText={(text) => setNotes(text)}
          multiline={true}
          numberOfLines={5}
          value={notes}
        ></TextInput>

        <TouchableOpacity
          onPress={() => setState("reading")}
          style={styles.buttonSave}
        >
          <Text style={styles.btnSaveTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default App;
