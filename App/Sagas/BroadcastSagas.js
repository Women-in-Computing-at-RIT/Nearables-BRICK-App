import { take, cancelled, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import BroadcastActions from '../Redux/BroadcastRedux';

import firestack from '../Lib/firestack';
import { Broadcast } from '../Lib/objects';
import { RefEvents, eventBroadcasts } from '../Lib/refs';

export function * listenForBroadcasts({ payload }) {
  console.dir(payload);
  const { event } = payload;
  const id = event.id;
  
  const chan = yield call(setupBroadcastChannel, id);
  
  try {
    while (true) {
      const action = yield take(chan);
      yield put(action);
    }
  } finally {
    if (cancelled())
      chan.close();
  }
}

function setupBroadcastChannel(id) {
  return eventChannel(emitter => {
    const broadcastRef = firestack.database.ref(eventBroadcasts({ id }));
    let addListener;
    
    broadcastRef.on(RefEvents.CHILD_ADDED, addListener = (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data && (Date.now() - data.timestamp) < 10000) {
        console.log("EMITTED")
        emitter(BroadcastActions.receive(new Broadcast(data)));
      }
    });
    
    return () => {
      broadcastRef.off(RefEvents.CHILD_ADDED, addListener);
    }
  });
}
