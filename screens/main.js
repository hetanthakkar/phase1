import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
  authDomain: "new1-930be.firebaseapp.com",
  databaseURL: "https://new1-930be.firebaseio.com",
  projectId: "new1-930be",
  storageBucket: "new1-930be.appspot.com",
  messagingSenderId: "332990256430",
  appId: "1:332990256430:web:640a6413492c34bf2a96bf",
  measurementId: "G-SBPS6449GM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;
var students = ["hetan", "thakkar", "sarthak", "vraj", "kavin"];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ test: "test" });
    console.log("main" + this.props.navigation.getParam("id"));
    var id = this.props.navigation.getParam("id");
    firebase
      .database()
      .ref("user/" + id)
      .on("value", async (snapshot) => {
        var name = snapshot.val().name;
        var about = snapshot.val().about;
        var photo = snapshot.val().photo;
        var skill = snapshot.val().skill;
        var state = snapshot.val().state;
        var city = snapshot.val().city;
        this.setState({ name });
        this.setState({ photo });
        this.setState({ about });
        this.setState({ skill });
        this.setState({ state });
        this.setState({ city });
        console.log(this.state);
      });
    console.log("object");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{
            height: screenHeight * 14,
            borderRadius: 100,
            width: screenWidth * 27,
            marginTop: screenHeight * 5,
            alignSelf: "center",
          }}
          source={{
            uri: this.state.photo,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingTop: screenHeight,
            alignSelf: "center",
          }}
        >
          {this.state.name}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            paddingTop: screenHeight,
          }}
        >
          {this.state.about}
        </Text>
        <TouchableOpacity
          onPress={() => console.log("hi")}
          style={{
            width: screenWidth * 95,
            borderRadius: 6,
            backgroundColor: "white",
            height: screenHeight * 4,
            marginTop: screenHeight * 2,
            marginLeft: screenHeight,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 21,
              textAlign: "center",
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            fontSize: 21,
            textAlign: "center",
            fontFamily: "sans-serif-light",
            marginTop: screenHeight * 2,
          }}
        >
          Location : {this.state.city},{this.state.state}
        </Text>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: screenHeight * 4,
                fontSize: 20,
                marginBottom: screenHeight * 2,
                marginLeft: screenWidth,
              }}
            >
              Students Taught
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {students.map((value) => (
              <TouchableOpacity>
                <Text style={{ fontFamily: "sans-serif-medium" }}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: screenHeight * 4,
                fontSize: 20,
                marginBottom: screenHeight * 2,
                marginLeft: screenWidth,
              }}
            >
              Your Tutors:
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {students.map((value) => (
              <TouchableOpacity>
                <Text style={{ fontFamily: "sans-serif-medium" }}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              marginTop: screenHeight * 2,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginTop: screenHeight * 2,
                fontFamily: "sans-serif",
              }}
            >
              Current Balance : 500
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: screenHeight * 4,
                fontFamily: "sans-serif",
              }}
            >
              Amount Withdrawn : 200
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            marginTop: screenHeight * 4,
            marginBottom: screenHeight * 4,
          }}
        >
          <Text style={{ fontSize: 25 }}>My Transactions</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#DAE0E2",
    textAlign: "center",
  },
});
