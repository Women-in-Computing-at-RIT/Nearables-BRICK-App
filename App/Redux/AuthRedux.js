import keyMirror from 'keymirror';
import Immutable from 'seamless-immutable';

export const AuthTypes = keyMirror({
  SET_ID: null,
})

const AuthActionCreators = {}

AuthActionCreators.setId = (id) => ({
  type: AuthTypes.SET_ID,
  payload: {
    id,
  },
})

export default AuthActionCreators;

const INITIAL_STATE = Immutable({
  participantId: null,
});

const setPId = (state, {id}) => state.merge({
  participantId: state.participantId || id,
});

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch(type) {
    case AuthTypes.SET_ID:
      return setPId(state, payload)
    default:
      return state
  }
}

export const getParticipantId = (state) => state.auth.participantId;
