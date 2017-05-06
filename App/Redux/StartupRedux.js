import keyMirror from 'keymirror'

/* ------------- Types and Action Creators ------------- */

const Types = keyMirror({
  STARTUP: null,
})

const Creators = {}

Creators.startup = () => ({
  type: Types.STARTUP,
})

export const StartupTypes = Types
export default Creators
