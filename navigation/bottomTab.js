import * as React from "react"
import CreateProfile from "../screens/createProfile"
import ReadProfile from '../screens/readProfile';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

const Tab = createMaterialBottomTabNavigator()

export default class BottomTab extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Create Profile" component={CreateProfile} />
                <Tab.Screen name="Read Profile" component={ReadProfile} />
            </Tab.Navigator>
        )
    }
}