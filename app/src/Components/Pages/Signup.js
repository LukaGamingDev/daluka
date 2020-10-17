import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <div className="flex-center">
            <div className="form-container">
                <h1>Signup</h1>
                <form className="form">
                    <section className="form__section">
                        <label for="email">Email</label>
                        <input type="email" id="email" required />
                    </section>
                    <section className="form__section">
                        <label for="password">Password</label>
                        <input type="password" id="password" required />
                    </section>
                    <button className="blue-button">Login</button>
                </form>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
            </div>
        </div>
   )
}

export default Signup
