import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  messageBox:{
    backgroundColor:'#bb9700',
    width:300,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10
  },
  messageBoxTitleText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    fontSize:20,
    marginBottom:10
  },
  messageBoxBodyText:{
    color:'#fff',
    fontSize:16
  },
  content:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
})
