import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    auth: require('./AuthRedux').reducer,
    events: require('./EventRedux').reducer,
    broadcasts: require('./BroadcastRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
