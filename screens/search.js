import React, { Component } from "react";
import { Text, ClippingRectangle } from "react-native";
import { Container, Header, Item, Input, Icon, Button } from "native-base";
export default class SearchBarExample extends Component {
  fucker = () => {
    console.log("sdkmo");
  };
  render() {
    return (
      <Container>
        <Header searchBar rounded autoCorrect={false}>
          <Item>
            <Icon name="ios-search" />
            <Input onChangeText={this.fucker} placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
