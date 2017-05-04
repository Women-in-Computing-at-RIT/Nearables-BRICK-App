import React from 'react'
import { Image, Text, View } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/ScreenStyles'
import {Actions as NavigationActions} from 'react-native-router-flux'
import { Button } from 'react-native-elements'
import Metrics from '../Themes/Metrics'

class CurrentEvents extends React.Component {
  render() {
    return (
      <View style={styles.mainScreen}>
        {/*imagine rit image styling */}
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop:20}}>
          <Image
            style={{width: 200, height:150}}
            source={require('../Images/imagine-white_cloud.gif')}
          />
        </View>
        {/* START NEW CODE */}
        <View style={styles.content}>
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxTitleText}>Alert</Text>
            <Text style={styles.messageBoxBodyText}>You aren't currently participating in a BRICK Event.</Text>
          </View>
        </View>
        {/* Defining Button QR Code */}
        <Button
          raised
          buttonStyle={{
            backgroundColor:"#ff7729",
            height: 45,
            borderRadius: 5,
            marginHorizontal: Metrics.section,
            marginVertical: Metrics.baseMargin,
          }}
          icon={{name: 'camera'}}
          title='Press to [Scan QR Code]'
          onPress={NavigationActions.scan}
        />
        <View style={styles.content}>
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxTitleText}>Instructions</Text>
            <Text style={styles.messageBoxBodyText}>To get started, scan a participating event's QR code.</Text>
          </View>
        </View>
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
