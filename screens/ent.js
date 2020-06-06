import React from "react";
import { Provider } from "react-redux";
import store from "./signup/store/index";
import Entry from "./entrypage";
export default class Signup extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Entry navigation={this.props.navigation} />
      </Provider>
    );
  }
}
