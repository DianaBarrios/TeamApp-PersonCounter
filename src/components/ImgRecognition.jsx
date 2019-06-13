import React from 'react';
const firebase = require('../firebase.js');
const db = firebase.db;
const st = firebase.storage;

class ImgRecognition extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            image: '',
            date: '',
            time: '',
            count: 0,
        }
        this.watchData = this.watchData.bind(this);
    }

   watchData(){
        let query = db.collection('PersonsCount').orderBy('timestamp', "desc");
        console.log({ query });
        let observer = query.onSnapshot(querySnapshot => {
            console.log(`Received query snapshot of size ${querySnapshot.size}`);
            
            var pics = [];

            querySnapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                pics.push(doc.data().count);
              });
          
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    
      componentDidMount(){
        this.watchData();
    }
    
  render(){
    return (
        <div>
            <div className="container">
                <h1>
                Image Recognition:
                </h1>
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