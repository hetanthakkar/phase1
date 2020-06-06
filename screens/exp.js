import * as React from "react";
import { Text } from "react-native-paper";
import { connect } from "react-redux";
import { currentId } from "../screens/signup/actions/index";
class MyComponent extends React.Component {
  async componentDidMount() {
    this.props.currentId({ id: 11 });
    await this.setState({ id: this.props.user.userReducer.id });
    console.log("dsfsdnfoisdf" + this.props.user.userReducer.id);
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Text style={{ fontSize: 40 }}>{this.state.id}</Text>;
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
