import React from 'react';
import './App.css';
import Title from './Title.jsx'

function App() {
  return (
    <div>
      
      <div>
        <header className="App-header">
            <div class="row justify-content-center">
              <div class="WE-ARE col-6">
                WE ARE
              </div>
            </div>

            <div class="row justify-content-center mt-5 mx-auto">
              <div class="col">
                <h1 class="display-1 font-weight-bold">
                  Sm<span style={{color: '#ffbf31'}}>;)</span>es.AI
                </h1>
              </div>
            </div>
        </header>
      </div>

      <div class="container my-5">
        <blockquote class="blockquote HMW">
          <p class="mb-0 ml-3 my-auto">
          How might we help companies to find a social program that matches their employees goals with their own?
          </p>
        </blockquote>
      </div>

      <div class="container my-5">
          <Title />

        <div class="card-deck mt-5">

          <div class="card">
            <img class="card-img-top" src="https://www.xing.com/image/c_2_b_d6d996c21_22325856_4/thomas-stanner-foto.256x256.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Thomas Stanner</h5>
              <p class="card-text">Product Manager</p>
              <a href="https://www.linkedin.com/in/thomas-stanner-27180a154/" class="card-link">Linkedin</a>
              <a href="https://www.xing.com/profile/Thomas_Stanner" class="card-link">XING</a>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src="https://lh3.googleusercontent.com/4YuhxErWgpwpDwkLmaNb-tuk4xPinslepgKHWcItf5H6mUNjUpWUxwFFvt5H_FXaRJPeZfGH22AhM9KpDoH2co1Ud3r9-aR20pqHnAbP50sbdszuz9FIBlOp_DGW-vU7FlJUqGw2=w2400" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Luis Kentzler</h5>
              <p class="card-text">Product Manager</p>
              <a href="https://www.linkedin.com/in/luis-kentzler-68409522/" class="card-link">Linkedin</a>
              <a href="https://github.com/kentzler" class="card-link">GitHub</a>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src="https://uploads-ssl.webflow.com/5abdd7517b8eed0b0cd96ac2/5c1dd5fcfa9b3ba74bd75961_IMG_9465%20%E6%8B%B7%E8%B2%9D-p-800.jpeg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Sunny Chen</h5>
              <p class="card-text">Interaction Designer</p>
              <a href="https://www.linkedin.com/in/chingyunchen/" class="card-link">Linkedin</a>
              <a href="https://www.chingyunchen.com/" class="card-link">Portfolio</a>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src="https://avatars3.githubusercontent.com/u/21281689?s=460&v=4" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Diana Barrios</h5>
              <p class="card-text">Software Engineer</p>
              <a href="https://www.linkedin.com/in/diana-barrios/" class="card-link">Linkedin</a>
              <a href="https://github.com/DianaBarrios" class="card-link">GitHub</a>
            </div>
          </div>
        </div>

      <div class="container Group-photo">
       <img src="https://lh3.googleusercontent.com/aXw358NW2VD0B3x_CFBadM1tOdRrkwI7y5_fVf0IKATgxO7YRkPSn5LpLoAchAYb7d3zrtzVxDu3jKn0yBEYTeFthAsKkARKZmOaeJ9O7wM-epIRkEnTMMVHPPw6kAzmc2xgLQdd=w2400" class="img-fluid" alt="Responsive image" />
      </div>

      <div class="card-deck">
        <div class="card About-us">
          <div class="card-body">
            <h1 class="card-title display-4 font-weight-bold">Creating a meaningful product.</h1>
            <h3 class="card-subtitle mb-4 text-muted"> </h3>
           <span class="badge badge-secondary line"> ----------- </span>
          </div>
        </div>

        <div class="card About-us">
          <div class="card-body">
            <h1 class="card-title display-4 font-weight-bold">Diverse group.</h1>
            <h3 class="card-subtitle mb-4 text-muted"> </h3>
            <span class="badge badge-secondary line"> ----------- </span>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
} 

export default App;
