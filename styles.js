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
    width: 60,
    height: 40,
    backgroundColor: "#069",
    borderRadius: 30,
  },
  btnPlusTxt: {
    position: "relative",
    color: "white",
    textAlign: "center",
    top: 2,
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonSave: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 70,
    height: 40,
    backgroundColor: "#069",
    borderRadius: 25,
  },
  btnSaveTxt: {
    position: "relative",
    color: "white",
    textAlign: "center",
    top: 7,
    fontSize: 18,
    fontWeight: "bold",
  },
  txtInput: {
    textAlignVertical: "top",
    padding: 10,
    backgroundColor: "#d8ebf2",
    height: 200,
  },
  notesViewEmpty: {
    padding: 20,
  },
  notesTxtEmpty: {
    opacity: 0.3,
  },
  btnPlusTxt2: {
    position: "relative",
    color: "white",
    textAlign: "center",
    top: 7,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
