import React from 'react'
import { StyleSheet, Text, View, Vibration } from 'react-native'
import { connect } from 'react-redux'


// Styles
import Camera from 'react-native-camera'

class Scanner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          cameraType={Camera.constants.Type.back}
          onBarCodeRead={this.onBarCodeRead}>
          <Text style={styles.capture}>Capturing QR Code</Text>
        </Camera>
      </View>
    );
  }

  onBarCodeRead(result) {
    if(this.barCodeFlag){
      this.barCodeFlag = false;
      setTimeout(function () {
        Vibration.vibrate();
        this.props.navigator.pop();
        console.log(result);
      }, 1000)
    }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner)
