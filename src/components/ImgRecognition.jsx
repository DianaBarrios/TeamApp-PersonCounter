import React from "react";
import { from } from 'rxjs';
const firebase = require("../firebase.js");
const db = firebase.db;
const st = firebase.st;

class ImgRecognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: "",
      date: "",
      name: "",
      location: ""
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
        //console.log(data);
        var fileName = data.name;

        var imagesRef = st.refFromURL('gs://smiles-ai-images')
        var imgRef = imagesRef.child(fileName);
        //var imgRef = st.ref().child(`smiles-ai-images/${fileName}`);

        imgRef.getDownloadURL().then(function(url) {
            console.log("Success getting the file");
            console.log(url);
            me.setState({
                count: data.count,
                time: data.timestamp.toDate().toLocaleTimeString("en-US"),
                date: data.timestamp.toDate().toLocaleDateString("en-US"),
                name: data.name,
                location: url
              });
        }).catch(function(error){
            console.log("Error getting the file");
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
          <img src={this.state.location} class="img-fluid" alt="Last" />
        </div>

        <div className="container">
          <h2>There are {this.state.count} persons in this picture.</h2>
          <h3>Date: {this.state.date}</h3>
          <h3>Time: {this.state.time}</h3>
          <h3>{this.state.name}</h3>
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

{this.state.location}
*/
