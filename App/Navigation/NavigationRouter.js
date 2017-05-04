import React, { Component } from 'react'
import { Scene, Router, Reducer } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import MainScreen from '../Containers/MainScreen'
import Scanner from '../Containers/Scanner'


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};


export default class NavigationRouter extends Component {
  render () {
    return (
      <Router createReducer={reducerCreate}>
        <ScrollView key="scroll">
        <Scene key="root">
          <Scene key="main" hideNavBar={true} component={MainScreen}/>
          <Scene key="scan" hideNavBar={true} component={Scanner}/>
        </Scene>
        </ScrollView>
    </Router>
    )
  }
}

