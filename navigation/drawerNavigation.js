import * as React from "react"
import BottomTab from "./bottomTab"
import { createDrawerNavigator } from "@react-navigation/drawer"
import LogoutScreen from "../screens/LogoutScreen"

const Drawer = createDrawerNavigator()

export default class DrawerNavigation extends React.Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={BottomTab} />
                <Drawer.Screen name="Logout" component={LogoutScreen} />
            </Drawer.Navigator>
        )
    }

}