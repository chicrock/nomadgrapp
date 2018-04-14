import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";

const LoggedOutNavigation = StackNavigator({
  Login: {
    screen: LogInScreen,
  },
});

export default LoggedOutNavigation;
