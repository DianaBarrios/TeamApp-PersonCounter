const firebase = require("firebase/app");
const storage = require("firebase/storage");
const firestore = require("firebase/firestore");

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

const db = firebase.firestore();
const st = firebase.storage();

module.exports = { db, st };
