import CurrentEvents from '../Containers/CurrentEvents'
import PastEvents from '../Containers/PastEvents'
import Scanner from '../Containers/Scanner'

export const ScreenNames = {
  CURRENT: 'Current Events',
  PAST: 'Past Events',
  // SCAN: 'Scan',
};

export const TabMetadata = {
  [ScreenNames.CURRENT]: {
    Element: CurrentEvents,
    icon: 'home',
  },
  [ScreenNames.PAST]: {
    Element: PastEvents,
    icon: 'reorder',
  },
  // [ScreenNames.SCAN]: {
  //   Element: Scanner,
  //   icon: 'scanner',
  // },
}
