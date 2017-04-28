import React from 'react';

import { Tabs, Tab, Icon } from 'react-native-elements';

import { TabMetadata, ScreenNames } from '../Lib/ScreenInfo';



export default class MainScreen extends React.Component {

  state = {
    currentTab: ScreenNames.CURRENT,
  }

  handleTabPress = (tabName) => () => {
    this.setState({ currentTab: tabName });
  }

  handleTabChangeRequest = (to) => {
    if (to in ScreenNames)
      this.handleTabPress(to);
  }

  render() {
    const { currentTab } = this.state;

    return (
      <Tabs>
        {
          Object.values(ScreenNames).map((name, idx) => {

            const {Element, icon} = TabMetadata[name];

            return (<Tab
              key={idx}
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
              selected={currentTab === name}
              title={name}
              renderIcon={() => <Icon color={'#bb8500'} name={icon} size={30}/>}
              renderSelectedIcon={() => <Icon color={'#6296f9'} name={icon} size={30}/>}
              onPress={this.handleTabPress(name)}>
              { Element ? <Element /> : <div/> }
            </Tab>);
          })
        }
      </Tabs>
    );
  }

}
