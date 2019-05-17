import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div class="container my-4 mx-5">
          <p class="font-italic">How might we help companies to find a social program that matches their employee goals with their own?</p>
          </div>
          <h1 class="text-monospace-bold text-warning">Smiles AI</h1>
        </header>
      </div>

      <div class="container my-5">
        <div class="card-deck">

          <div class="card">
            <img class="card-img-top" src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Thomas Stanner</h5>
              <p class="card-text">Project Manager</p>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src="https://avatars2.githubusercontent.com/u/4184874?s=460&v=4" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Luis Kentzler</h5>
              <p class="card-text">Project Manager</p>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src="https://uploads-ssl.webflow.com/5abdd7517b8eed0b0cd96ac2/5c1dd5fcfa9b3ba74bd75961_IMG_9465%20%E6%8B%B7%E8%B2%9D-p-800.jpeg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Sunny Chen</h5>
              <p class="card-text">Interaction Designer</p>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src="https://avatars3.githubusercontent.com/u/21281689?s=460&v=4" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Diana Barrios</h5>
              <p class="card-text">Software Engineer</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 

export default App;
