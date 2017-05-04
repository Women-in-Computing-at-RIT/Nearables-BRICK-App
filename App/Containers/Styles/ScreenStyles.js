import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  messageBox:{
    backgroundColor:'#ffffff',
    width:300,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10
  },
  messageBoxTitleText:{
    fontWeight:'bold',
    color:'#000000',
    textAlign:'center',
    fontSize:20,
    marginBottom:10,
    borderBottomWidth: 5
  },
  messageBoxBodyText:{
    color:'#000000',
    textAlign:'center',
    fontSize:16
  },
  content:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  mainScreen: {
    flex: 1,
    backgroundColor:"#ffb2e3"
  },
})
