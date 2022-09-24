import * as React from 'react'
import { Text, View } from "react-native"
import firebase from "firebase"

export default class LogoutScreen extends React.Component {
  componentDidMount(){
    firebase.auth().signOut()
    
  }


    render() {
        return (
            <View>
                <Text>logout</Text>
            </View>
        )
    }

}