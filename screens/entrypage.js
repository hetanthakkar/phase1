import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Search from "./search";
import Exp from "./experiment";
import { connect } from "react-redux";
import { currentId } from "../screens/signup/actions/index";
import Bar from "./bar";
const searchRoute = () => <Bar />;

const walletRoute = () => <Exp />;

const profileRoute = () => <Bar />;

class MyComponent extends React.Component {
  homeRoute = () => (
    <Text style={{ fontSize: 40 }}>
      sdfjusdf{this.props.user.userReducer.id}
    </Text>
  );

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.currentId({ id: 11 });
    console.log(this.props.user.userReducer.id);
  }
  state = {
    id: 1212,
    index: 0,
    routes: [
      {
        key: "home",
        title: "Home",
        icon: "home",
      },
      {
        key: "search",
        title: "Search",
        icon: "account-search",
        color: "#4050B4",
      },
      { key: "wallet", title: "Wallet", icon: "wallet", color: "#BB2CD9" },
      { key: "profile", title: "Profile", icon: "account", color: "#00CCCD" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: this.homeRoute,
    search: searchRoute,
    wallet: walletRoute,
    profile: profileRoute,
  });

  render() {
    return (
      <BottomNavigation
        sceneAnimationEnabled={true}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    currentId: (value) => dispatch(currentId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
