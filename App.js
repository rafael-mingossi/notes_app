import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";
import styles from "./styles";
import Header from "./components/Header";
//import ButtonPlus from "./components/ButtonPlus";
//import ButtonSave from "./components/ButtonSave";

const App = () => {
  //defining state variable for reading notes
  const [state, setState] = useState("reading");
  //defining state variable for writing notes
  const [notes, setNotes] = useState("");

  //Use useEffect only once ,[]
  useEffect(() => {
    //when the app starts the key notes will be read
    (async () => {
      try {
        const notesRead = await AsyncStorage.getItem("notes");
        setNotes(notesRead);
      } catch (error) {}
    })();
  }, []);

  //Create a func to save notes when closing app
  setData = async () => {
    try {
      await AsyncStorage.setItem("notes", notes);
    } catch (error) {}
    alert("Your note's been saved!");
  };

  function updateText() {
    setState("reading");
    setData();
  }

  //validating which state is the current one
  if (state == "reading") {
    return (
      <View style={styles.mainView}>
        <Header />
        {/* Verify if there is any note */}
        {notes != "" ? (
          <View style={styles.notesView}>
            <Text style={styles.notesTxt}>{notes}</Text>
          </View>
        ) : (
          <View style={styles.notesViewEmpty}>
            <Text style={styles.notesTxtEmpty}>You don't have any notes!</Text>
          </View>
        )}
        {/* Plus button */}
        <TouchableOpacity
          onPress={() => setState("updating")}
          style={styles.buttonPlus}
        >
          {/* Validating type of button to showdepending on whether notes are empty or not*/}
          {notes == "" ? (
            <Text style={styles.btnPlusTxt}>+</Text>
          ) : (
            <Text style={styles.btnPlusTxt2}>Edit</Text>
          )}
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
          autoFocus={true}
        ></TextInput>

        <TouchableOpacity
          onPress={() => updateText()}
          style={styles.buttonSave}
        >
          <Text style={styles.btnSaveTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default App;
