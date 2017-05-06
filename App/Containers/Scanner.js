import React from 'react'
import { StyleSheet, Text, View, Vibration } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { QRCodes } from '../Lib/qrcode';
import { connect } from 'react-redux'

import EventActions from '../Redux/EventRedux';


// Styles
import Camera from 'react-native-camera'

class Scanner extends React.Component {
  
  static propTypes = {
    onScan: React.PropTypes.func,
  }
  
  constructor (props) {
    super(props);
    
    this.state = {
      active: false,
    }
  }
  
  componentWillMount() {
    this.setState({ active: true });
  }
  
  componentWillUnmount() {
    this.setState({ active: false });
  }
  
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          cameraType={Camera.constants.Type.back}
          onBarCodeRead={this.onBarCodeRead}
          barCodeTypes={['qr']}
          barcodeScannerEnabled={this.state.active}
        >
          <Text style={styles.capture}>Focus on QR Code</Text>
        </Camera>
      </View>
    );
  }

  onBarCodeRead = (result) => {
    Vibration.vibrate();
    Actions.pop();
    this.setState({ state: false });
    
    const data = QRCodes.event.parse(result.data);
    
    if (data.length === 1)
      this.props.onScan(data);
    
    console.log(result);
    console.log(data);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onScan: (data) => dispatch(EventActions.scannedEvent(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner)
