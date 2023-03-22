import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignInScreen.css'
function SignInScreen() {
  const emailRef = useRef(null)
   const passwordRef = useRef(null)

    const register = (e) => {
      e.preventDefault()
      auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value
      )
        .then((authUser) => { 
          console.log(authUser)
        })
        .catch((err) => {
        alert(err.message)
      })
    }
    const signIn = (e) => {
      e.preventDefault()
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser)
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">Sign In</button>
        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span onClick={register} className="signInScreen__link">Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen