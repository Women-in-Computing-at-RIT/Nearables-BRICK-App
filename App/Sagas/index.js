import { takeLatest, takeEvery } from 'redux-saga'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { EventTypes } from '../Redux/EventRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { openScreen } from './OpenScreenSagas'
import { startupEvents, handleScan } from './EventSagas';
import { listenForBroadcasts } from './BroadcastSagas';

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(EventTypes.GET_EVENTS, startupEvents),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(EventTypes.SCANNED_EVENT, handleScan),
    
    takeLatest(EventTypes.SET_CURRENT_EVENT, listenForBroadcasts),
  ]
}
