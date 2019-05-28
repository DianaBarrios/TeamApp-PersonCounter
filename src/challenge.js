import React from 'react'
import { Route, Link } from 'react-router-dom'

class Challenge extends React.Component {
    render() {
        return (
            <div>
                <div class="container ml-5">
                    <header className="Challenge-header">
                        <h1 class="text-warning font-weight-bold">Engineering Challenge 2</h1>
                    </header>
                </div>

                <div class="container my-5">
                    <img src="https://us-central1-core-228912.cloudfunctions.net/raspberry-pi-a7?apiKey=lyubomir" class="img-fluid" alt="Responsive image"></img>
                </div>
            </div>
        )
    }
}

export default Challenge