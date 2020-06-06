import { StyleSheet, Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;

const styles1 = StyleSheet.create({
  skills: {
    marginLeft: screenWidth * 4,
    color: "white",
    fontSize: 18,
  },
  about: {
    color: "white",
    textAlign: "center",
    lineHeight: 2,
    fontSize: 17,
    marginTop: screenHeight * 2,
    marginLeft: screenWidth * 5,
    width: screenWidth * 55,
    height: screenHeight * 10,
    borderColor: "white",
    borderRadius: 7,
    borderWidth: 2,
  },

  textInput: {
    color: "white",
    marginTop: screenHeight * 3,
    marginLeft: screenWidth * 4,
    padding: 5,
    width: screenWidth * 40,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    marginLeft: screenWidth * 4,
    fontSize: 30,
    marginTop: screenHeight * 10,
    marginBottom: screenHeight * 4,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    top: screenHeight * 40,
    alignSelf: "center",
    backgroundColor: "#F57C00",
    borderRadius: 14,
    width: screenWidth * 40,
    height: screenHeight * 8,
  },
  buttonText: {
    color: "#EAF0F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    textAlignVertical: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#4834DF",
  },
  paragraph: {
    margin: "12%",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default styles1;
