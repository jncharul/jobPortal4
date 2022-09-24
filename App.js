import * as React from "react"
import LoginScreen from "./screens/LoginScreen"
import DrawerNavigation from "./navigation/drawerNavigation"
import LoadingScreen from "./screens/LoadingScreen"
import DashboardScreen from "./screens/DashboardScreen"
import { createSwitchNavigator, createAppContainer } from "react-navigation"

export default class App extends React.Component {
  render() {
    return (
      
        <AppContainer />
     
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  LoadingScreen :LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})
const AppContainer = createAppContainer(SwitchNavigator)