import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        const email = emailRef.current.value
        const password = passwordRef.current.value

        setError('')

        try {
            const res = await fetch('/api/auth/signup', {
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

            setError(await res.text())
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <div className="flex-center">
            <div className="form-container">
                <h1>Sign Up</h1>
                <p className="error">{error}</p>
                <form className="form" onSubmit={handleSubmit}>
                    <section className="form__section">
                        <input type="email" id="email" ref={emailRef} required autoFocus />
                        <label htmlFor="email">Email</label>
                    </section>
                    <section className="form__section">
                        <input type="password" id="password" ref={passwordRef} required />
                        <label htmlFor="password">Password</label>
                    </section>
                    <button className="blue-button">Sign Up</button>
                </form>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
            </div>
        </div>
   )
}

export default Login
