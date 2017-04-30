import React, { Component } from 'react'
import { Scene, Router, Reducer } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import MainScreen from '../Containers/MainScreen'


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
          <Scene key="scanner" hideNavBar={true} component={MainScreen.SCAN}/>
        </Scene>
        </ScrollView>
    </Router>
    )
  }
}

