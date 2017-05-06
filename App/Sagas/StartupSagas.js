import { put, select } from 'redux-saga/effects'
import uuid from 'react-native-uuid';

import AuthActions, { getParticipantId } from '../Redux/AuthRedux';
import EventActions from '../Redux/EventRedux';

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
      }
    })
  }
  
  try {
    let id = yield select(getParticipantId);
    console.log(id);
  
    if (id === null || id === undefined)
      yield put(AuthActions.setId(id = uuid.v4()));
    
    yield put(EventActions.getEvents(id));
  } catch (e) {
    console.error(e);
  }
}
