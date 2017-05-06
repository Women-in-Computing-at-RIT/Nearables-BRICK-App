import keyMirror from 'keymirror';
import Immutable from 'seamless-immutable';

import { Broadcast } from '../Lib/objects'
import PushNotifs from 'react-native-push-notification';

export const BroadcastTypes = keyMirror({
  RECEIVE: null,
});

const Creators = {};

Creators.receive = (broadcast) => ({
  type: BroadcastTypes.RECEIVE,
  payload: {
    broadcast,
  },
});

export default Creators;

/**
 * @param state
 * @param {Broadcast} broadcast
 * @returns {*}
 */
const receiveBroadcast = (state, { broadcast }) => {
  console.log(broadcast);
  PushNotifs.localNotification({
    title: 'Agency Notice',
    message: broadcast.message,
  });
  return state;
};

export const reducer = (state = {}, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case BroadcastTypes.RECEIVE:
      return receiveBroadcast(state, payload);
    default:
      return state;
  }
}
