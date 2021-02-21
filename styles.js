import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    marginTop: 37,
    flex: 1,
  },
  notesView: {
    padding: 20,
  },
  notesTxt: {
    fontSize: 17,
  },
  buttonPlus: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: "#069",
    borderRadius: 25,
  },
  btnPlusTxt: {
    position: "relative",
    color: "white",
    textAlign: "center",
    top: 8,
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonSave: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 100,
    height: 40,
    backgroundColor: "#069",
    borderRadius: 25,
  },
  btnSaveTxt: {
    position: "relative",
    color: "white",
    textAlign: "center",
    top: 6,
    fontSize: 20,
    fontWeight: "bold",
  },
  txtInput: {
    textAlignVertical: "top",
    padding: 10,
    backgroundColor: "#d8ebf2",
    height: 200,
  },
});

export default styles;
