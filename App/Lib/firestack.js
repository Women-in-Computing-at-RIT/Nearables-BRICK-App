import Firestack from 'react-native-firestack';
import AppConf from '../Config/AppConfig';

const firestack = new Firestack({
  debug: true,
})

firestack.storage.setStorageUrl(AppConf.firebase.storageBucket);
firestack.database.setPersistence(true);

export default firestack;
