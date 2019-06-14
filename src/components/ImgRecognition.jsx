import React from "react";
//import firebase from '../firebase.js'
const firebase = require("../firebase.js");
const db = firebase.db;
const st = firebase.st;

//const db = firebase.firestore();
//const st = firebase.storage();

class ImgRecognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: "",
      date: "",
      name: ""
    };
    this.watchData = this.watchData.bind(this);
  }

  watchData() {
    let me = this;
    let query = db
      .collection("PersonsCount")
      .orderBy("timestamp", "desc")
      .limit(1);
    let observer = query.onSnapshot(
      querySnapshot => {
        // console.log(`Received query snapshot of size ${querySnapshot.size}`);

        let data = querySnapshot.docs[0].data();
        // console.log(data);
 
        
        var stRef = st.ref();
        var picsRef = stRef.child('smiles-ai-images');
        //picsRef.getDownloadURL();
        var fileName = data.name;
        var picRef = picsRef.child(name);
        picRef.getDownloadURL().then(function(url) {
          console.log(url);
        });
        
        me.setState({
          count: data.count,
          time: data.timestamp.toDate().toLocaleTimeString("en-US"),
          date: data.timestamp.toDate().toLocaleDateString("en-US"),
          name: data.name
        });
      },
      err => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }

  componentDidMount() {
    this.watchData();
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Image Recognition:</h1>
          <h2>There are {this.state.count} persons in this picture.</h2>
          <h3>Date: {this.state.date}</h3>
          <h3>Time: {this.state.time}</h3>
        </div>

        <div className="container">
          <h3>Picture: {this.state.name}</h3>
          <img src="" class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    );
  }
}

export default ImgRecognition;

/*
- Research about Prettier and integrate with Visual Studio Code
- Invite lyu to repo
- React Tutorial 
- Incorporate in your app
- bonus: how to develop cloud functions locally
*/
