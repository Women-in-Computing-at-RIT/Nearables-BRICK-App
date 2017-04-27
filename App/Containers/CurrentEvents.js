import React from 'react'
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/ScreenStyles'
import RoundedButton from 'ignite-ir-boilerplate-2016/boilerplate/App/Components/RoundedButton'
import Scanner from './Scanner'
import * as Action from 'react-native'
import render from 'enzyme/src/render'

class CurrentEvents extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
          {/* START NEW CODE */}
          <View style={styles.content}>
            <View style={styles.messageBox}>
            <View>
              <Text style={styles.messageBoxTitleText}>Alert</Text>
            </View>
            <View>
              <Text style={styles.messageBoxBodyText}>You aren't currently participating in a BRICK Event.</Text>
            </View>
            </View>
          </View>
          {/* Defining Button */}
          <Button title="Scan QR Code" key="QRButton" onPress={this}/>
            <View style={styles.content}>
            <View style={styles.messageBox}>
              <View>
                <Text style={styles.messageBoxTitleText}>Instructions</Text>
              </View>
              <View>
                <Text style={styles.messageBoxBodyText}>To get started, scan a participating event's QR code.</Text>
              </View>
            </View>
          </View>

          {/* END NEW CODE */}

        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentEvents)
