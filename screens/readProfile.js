import * as React from 'react';
import {Text,View,FlatList} from "react-native";
import {Header} from 'react-native-elements';
import db from '../config'
export default class ReadProfile extends React.Component{
  constructor(){
    super();
    this.state = {
      getList : []
    }
  }

  async getData(){
  await  db.collection("profiles").onSnapshot((snapshot) => {
      var getList = snapshot.docs.map((document) => document.data());

      this.setState({
        getList: getList,
      });
    });
  }

  componentDidMount(){
    this.getData();
    console.log(this.state.getList);
  }

  renderItem = ({item})=>{
     return( 
       <View style = {{borderWidth : 2}}>
     <Text>Name : {item.name}</Text>
     <Text>Contact : {item.contact} </Text>
     <Text>Mail : {item.email}</Text>
     <Text>Profile : {item.profile}</Text>

     </View>
     )
  }

  render(){
    return(
      <View>
               <Header
                    backgroundColor={'#A1C181'}
                    centerComponent={{
                        text: 'JOB PORTAL',
                        style: { color: 'black', fontSize: 25, fontWeight: 'BOLD' }
                    }}
                />
                <View>
                <FlatList 
                data = {this.state.getList}
                keyExtractor = {(item,index)=>index.toString()}
                renderItem = {this.renderItem} />
                </View>
      </View>
    )
  }
}

