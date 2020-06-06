import Signup from "./screens/signup/Signup";
import { YellowBox } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Demo from "./screens/demo";
import Demo1 from "./screens/demo1";
import Bar from "./screens/bar";
import Main from "./screens/main";
import Pic from "./screens/pic";
import Profile from "./screens/profile/index";
import Entry from "./screens/ent";
import Search from "./screens/search";
import _ from "lodash";

console.disableYellowBox = true;
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
export default createAppContainer(
  createSwitchNavigator(
    {
      Signup,
      Demo,
      Demo1,
      Pic,
      Search,
      Profile,
      Bar,
      Main,
      Entry,
    },
    {
      initialRouteName: "Entry",
    }
  )
);
