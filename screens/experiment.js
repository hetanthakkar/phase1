import React from "react";
import { Provider } from "react-redux";
import store from "./signup/store/index";
import Exp from "./exp";
export default class Signup extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Exp navigation={this.props.navigation} />
      </Provider>
    );
  }
}
