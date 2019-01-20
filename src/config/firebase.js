import firebase from "firebase";
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyCRNiglb9UeZewyfQp2okmYeTN9-CpAQtU",
  authDomain: "fir-example-77316.firebaseapp.com",
  databaseURL: "https://fir-example-77316.firebaseio.com",
  projectId: "fir-example-77316",
  storageBucket: "fir-example-77316.appspot.com",
  messagingSenderId: "90449552392"
};

firebase.initializeApp(config);
var firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const storage = firebase.storage();

export default storage;

// export {
//   storage,
//   firestore,
//   firebase as default
// }
