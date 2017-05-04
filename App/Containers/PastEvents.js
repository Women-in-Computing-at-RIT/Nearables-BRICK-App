import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
// Styles
import styles from './Styles/ScreenStyles'
import { Icon } from 'react-native-elements'


class PastEvents extends React.Component {
  render() {
    return (
      <View style={styles.mainScreen}>
        {/* START NEW CODE */}
        <View style={styles.content}>
          <View style={styles.messageBox}>
            <View>
              <Text style={styles.messageBoxTitleText}>Event History</Text>
            </View>
            <View>
              <Text style={styles.messageBoxBodyText}>You have participated in no past events.</Text>
              <Icon color={'#9b908a'} name="refresh" size={80}/>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(PastEvents)
