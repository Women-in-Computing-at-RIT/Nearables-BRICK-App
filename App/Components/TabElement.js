import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, Icon } from 'react-native-elements'
import CurrentEvents from '../Containers/CurrentEvents'

export default class TabElement extends Component {

  constructor() {
    super()
    this.state = {
      selectedTab: 'CurrentEvents',
    }
  }

  static propTypes = {
    selectedTab: PropTypes.bool,
    title: PropTypes.string,
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render() {
    let selectedTab = this.state
    return (
    <Tabs>
      <Tab>
        titleStyle={{fontWeight: 'bold', fontSize: 10}}
        selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
        selected={selectedTab}
        title= {selectedTab === "Current Event"}
        renderIcon={() => <Icon name='rowing'/>}
        renderSelectedIcon={() => <Icon color={'#6296f9'} name='heartbeat' size={30}/>}
        onPress={() => this.changeTab('CurrentEvents')}>
      </Tab>
    </Tabs>
    )
  }

}
