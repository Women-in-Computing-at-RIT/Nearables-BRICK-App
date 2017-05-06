import keyMirror from 'keymirror'

/* ------------- Types and Action Creators ------------- */

const Types = keyMirror({
  OPEN_SCREEN: null,
})

const Creators = {}

Creators.openScreen = (screen, options) => ({
  type: Types.OPEN_SCREEN,
  payload: {
    screen,
    options,
  },
})

export const OpenScreenTypes = Types
export default Creators
