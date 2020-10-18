import React, {useRef, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState('')

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        
        const email = emailRef.current.value
        const password = passwordRef.current.value

        setError('')

        try {
            const res = await fetch('/api/auth/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            if (!res.ok) {
                throw await res.json()
            }

            history.push('/')
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <div className="flex-center">
            <div className="form-container">
                <h1>Login</h1>
                <p className="error">{error}</p>
                <form className="form" onSubmit={handleSubmit}>
                    <section className="form__section">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" ref={emailRef} required />
                    </section>
                    <section className="form__section">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={passwordRef} required />
                    </section>
                    <button className="blue-button">Login</button>
                </form>
                <p>Don't have an Account? <Link to="/signup">Create One</Link></p>
            </div>
        </div>
   )
}

export default Login
