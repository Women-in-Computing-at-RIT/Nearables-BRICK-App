import React, { Component } from 'react'
import { Scene, Router, Reducer, Actions, ActionConst } from 'react-native-router-flux'

//The three page scenes we wil be handling
import CurrentEvents from '../Containers/CurrentEvents'
import PastEvents from '../Containers/PastEvents'
import Scan from '../Containers/Scanner'
import TabIcon from '../Components/TabIcon'
import { ScrollView } from 'react-native'
import TabElement from '../Components/TabElement'
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
        </Scene>
        </ScrollView>
    </Router>
    )
  }
}

