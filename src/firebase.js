import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDqSPSxMQOmTP6R2qOauDNYrBrKRPvfbc0",
  authDomain: "smiles-ai.firebaseapp.com",
  databaseURL: "https://smiles-ai.firebaseio.com",
  projectId: "smiles-ai",
  storageBucket: "smiles-ai.appspot.com",
  messagingSenderId: "165351250419",
  appId: "1:165351250419:web:d08a3639876167ba"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);
  
export default firebase;