import React, { Component } from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import { Item, Input, Icon, Button } from "native-base";
import { Picker } from "react-native-picker-dropdown";

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
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from "native-base";
var pic, temp, temp1;
var publics = [];
var newpublics = [];
export default class ListAvatarExample extends Component {
  componentDidMount() {
    for (let k = 0; k <= 6; k++) {
      firebase
        .database()
        .ref("user/" + k)
        .on("value", (snapshot) => {
          var fetch_name = snapshot.val().name;
          var fetch_about = snapshot.val().about;
          var fetch_photo = snapshot.val().photo;
          var fetch_city = snapshot.val().city;
          var a = {
            name: fetch_name,
            about: fetch_about,
            photo: fetch_photo,
            city: fetch_city,
          };
          publics.push(a);
        });
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      picker: false,
      bar: "",
      dis: [],
      disp: [],
      state: "Enter State",
      about: [],
      city: [],
      cityy: "",
      pressed: false,
    };
  }
  image = (item) => {
    //console.log("image inside " + item);
    for (let j = 0; j < this.state.disp.length; j++) {
      if (item == this.state.dis[j]) pic = j;
    }
    return this.state.disp[pic];
  };
  about = (item) => {
    for (let j = 0; j < this.state.about.length; j++) {
      if (item == this.state.dis[j]) temp = j;
    }
    return this.state.about[temp];
  };
  city = (item) => {
    for (let j = 0; j < this.state.city.length; j++) {
      if (item == this.state.dis[j]) temp1 = j;
    }
    return this.state.city[temp];
  };
  updatecity = async (value) => {
    let dis = [];
    let disp = [];
    let about = [];
    let city = [];
    await this.setState({ cityy: value });
    if (this.state.pressed) {
      for (let k = 0; k < publics.length; k++)
        newpublics = publics.filter(function (publiic) {
          if (value != "Enter City") return publiic.city == value;
          else return publics;
        });
      for (let i = 0; i < newpublics.length; i++) {
        if (newpublics[i].name.includes(this.state.bar)) {
          dis.push(newpublics[i].name);
          disp.push(newpublics[i].photo);
          about.push(newpublics[i].about);
          city.push(newpublics[i].city);
        }
      }
      console.log({ dis });
      this.setState({ dis: dis });
      this.setState({ disp: disp });
      this.setState({ about: about });
      this.setState({ city: city });
      console.log("new public is " + JSON.stringify(newpublics));
    }
  };
  handleValueChange = (value) => {
    this.setState({ state: value });
  };

  onChange = async (bar) => {
    await this.setState({ bar: bar });
    if (bar.length != 0) {
      let dis = [];
      let disp = [];
      let about = [];
      let city = [];
      //  if (newpublics.length != 0) publics = newpublics;
      for (let i = 0; i < publics.length; i++) {
        if (publics[i].name.includes(this.state.bar)) {
          dis.push(publics[i].name);
          disp.push(publics[i].photo);
          about.push(publics[i].about);
          city.push(publics[i].city);
        }
      }
      console.log({ dis });
      this.setState({ dis: dis });
      this.setState({ disp: disp });
      this.setState({ about: about });
      this.setState({ city: city });
    } else {
      this.setState({ dis: [] });
      this.setState({ disp: [] });
      this.setState({ about: [] });
      this.setState({ city: [] });
    }
  };
  getcityes = () => {
    if (this.state.state == "Enter State")
      return ["Enter City"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "Gujarat")
      return [
        "Enter City",
        "Ahmedabad",
        "Anand",
        "Bhavnagar",
        "Gandhinagar",
        "Jamnagar",
        "Rajkot",
        "Surat",
        "Vadodara",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Maharashtra")
      return [
        "Enter City",
        "Akola",
        "Kalyan",
        "Mumbai",
        "Navi Mumbai",
        "Panvel",
        "Pune",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Chhattisgarh")
      return [
        "Enter City",
        "Raipur",
        "Bilaspur",
        "Bastar",
        "Jashpur",
        "Durg",
        "Koriya",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state === "Jharkhand")
      return [
        "Enter City",
        "Ranchi",
        "Bokaro",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "Ghatshila",
        "Hazaribagh",
        "Jamshedpur",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Kerala")
      return ["Enter City", "Kochi"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "Madhya Pradesh")
      return [
        "Enter City",
        "Bhopal",
        "Indore",
        "Gwalior",
        "Jabalpur",
        "Sagar",
        "Ujjain ",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Karnataka")
      return [
        "Enter City",
        "Mangalore",
        "Bangalore",
        "Mysore",
        "Bijapur",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Rajasthan")
      return [
        "Enter City",
        "Kota",
        "Udaipur",
        "Jaipur",
        "Jodhpur",
        "Sikar",
        "Ajmer",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Tamil Nadu")
      return [
        "Enter City",
        "Coimbatore",
        "Salem",
        "Madurai",
        "Tiruchirapalli",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Uttar Pradesh")
      return [
        "Enter City",
        "Kanpur",
        "Lucknow",
        "Ghaziabad",
        "Agra",
        "Varanasi",
        "Prayagraj",
      ].map((city) => <Picker.Item label={city} value={city} />);
    if (this.state.state == "Delhi")
      return ["Enter City", "Delhi NCR"].map((city) => (
        <Picker.Item label={city} value={city} />
      ));
    if (this.state.state == "")
      return <Picker.Item label="Enter City" value="" />;
  };

  view = () => {
    if (this.state.picker) {
      return (
        <View>
          <Picker
            selectedValue={this.state.state}
            onValueChange={this.handleValueChange}
            mode="dialog"
          >
            <Picker.Item label="Enter State" value="Enter State" />
            <Picker.Item label="Delhi" value="Delhi" />
            <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
            <Picker.Item label="Goa" value="Goa" />
            <Picker.Item label="Gujarat" value="Gujarat" />
            <Picker.Item label="Haryana" value="Haryana" />
            <Picker.Item label="Jharkhand" value="Jharkhand" />
            <Picker.Item label="Karnataka" value="Karnataka" />
            <Picker.Item label="Kerala" value="Kerala" />
            <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
            <Picker.Item label="Punjab" value="Punjab" />
            <Picker.Item label="Rajasthan" value="Rajasthan" />
            <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
            <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
          </Picker>

          <Picker
            onValueChange={(itemValue) => this.updatecity(itemValue)}
            selectedValue={this.state.cityy}
            mode="dialog"
          >
            {this.getcityes()}
          </Picker>
        </View>
      );
    } else return <View></View>;
  };

  toRender = async () => {
    await this.setState({ picker: !this.state.picker });
    await this.setState({ pressed: !this.state.pressed });
    if (!this.state.pressed) this.onChange(this.state.bar);
    else this.updatecity(this.state.city);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container>
          <Header
            searchBar
            rounded
            autoCorrect={false}
            style={{ height: screenHeight * 12 }}
          >
            <Item style={{ marginTop: -screenHeight * 2 }}>
              <Icon name="ios-search" />
              <Input value={this.state.bar} onChangeText={this.onChange} />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <TouchableOpacity
            onPress={this.toRender}
            style={{
              marginTop: screenHeight * 1.5,
              marginLeft: screenWidth * 3,
              backgroundColor: "#A4B0BD",
              width: screenWidth * 30,
              borderRadius: 7,
              height: screenHeight * 3,
            }}
          >
            <Text style={{ textAlign: "center", color: "black" }}>
              View-By-City
            </Text>
          </TouchableOpacity>

          {this.view()}
          <Content>
            {this.state.dis.length != 0 ? (
              <List
                onPress={() => console.log("sdfn")}
                dataArray={this.state.dis}
                renderRow={(item) => (
                  <ListItem
                    avatar
                    onPress={() =>
                      this.props.navigation.navigate("Profile", { name: item })
                    }
                  >
                    <Left>
                      <Thumbnail source={{ uri: this.image(item) }} />
                    </Left>
                    <Body>
                      <Text>{item}</Text>
                      <Text note>{this.about(item)}</Text>
                    </Body>
                    <Right>
                      <Text note>{this.city(item)}</Text>
                    </Right>
                  </ListItem>
                )}
              />
            ) : (
              <View></View>
            )}
          </Content>
        </Container>
      </View>
    );
  }
}
