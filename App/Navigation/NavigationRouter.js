import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import CurrentEvents from '../Containers/CurrentEvents'
import PastEvents from '../Containers/PastEvents'
import Scan from '../Containers/Scanner'
import { Text } from 'react-native'


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{
      color: selected ? 'black' :'white',
      textAlign:'center',
      borderBottomWidth: selected ? 5 : 0,
      fontWeight: 'bold'
    }}>{title}</Text>
  );
}

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{backgroundColor: '#bb9700', borderColor:"black"}}
          >
            {/* Current Events Scene */}
            <Scene key="curr" title="Current Event" icon={TabIcon}>
              <Scene
                key="CurrentEvents"
                component={CurrentEvents}
                title="Current Events"
              />
            </Scene>

            {/* Past Events Scene */}
            <Scene key="past" title="Past Events" icon={TabIcon}>
              <Scene
                key="PastEvents"
                component={PastEvents}
                title="Past Events"
              />
            </Scene>

            {/* Scan Scene */}
            <Scene key="scan" title="QR Code Scanner" icon={TabIcon}>
              <Scene
                key="Scan"
                component={Scan}
                title="QR Code Scanner"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
