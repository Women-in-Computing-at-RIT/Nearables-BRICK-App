import { put, select, call } from 'redux-saga/effects';
import invariant from 'invariant';

import fbProxy from './firebasePromiseProxy';
import { getParticipantId } from '../Redux/AuthRedux';
import EventActions, { hasEvent, getEvent } from '../Redux/EventRedux';
import { Event } from '../Lib/objects';
import { RefEvents, participantEvents, eventBase, event as eventPath } from '../Lib/refs';
import firestack from '../Lib/firestack';

export function * handleScan({ payload }) {
  const { id } = payload;
  
  const alreadyHas = yield select((state) => hasEvent(state, id));

  if (alreadyHas) {
    const realEvent = yield select((state) => getEvent(state, id));
    yield put(EventActions.setCurrentEvent(realEvent));
  } else {
    const ref = firestack.database.ref(eventPath({ id }));
    
    let event = yield call(fbProxy, ref.once(RefEvents.VALUE, snapshot => {
      const data = snapshot.val();
      
      if (data)
        return Promise.resolve(new Event(data));
      else
        return Promise.reject();
    }));
    event = event.value;
    
    yield put(EventActions.addEventDbCallback(event));
    yield put(EventActions.setCurrentEvent(event));
  }
}

export function * startupEvents() {
  const id = yield select(getParticipantId);
  invariant(id !== null && id !== undefined, 'Id is undefined when getting events');
  
  const participatingRefs = firestack.database.ref(participantEvents({ uid: id }));
  const eventRef = firestack.database.ref(eventBase());
  try {
    const eventIds = [];
    const events = [];
    
    yield call(fbProxy, participatingRefs.once(RefEvents.VALUE, snapshot => {
      Object.keys(snapshot.val() || {}).forEach(x => eventIds.push(x));
    }));
    
    yield call(fbProxy, eventRef.once(RefEvents.VALUE, snapshot => {
      for (const id of eventIds) {
        const x = (snapshot.child(id).val());
        
        events.push(new Event(x));
      }
    
      console.dir(events);
      return Promise.resolve(events);
    }));
    console.dir(events);
    yield put(EventActions.setEvents(events));
  } catch (e) {
    console.error(e);
  }
}
