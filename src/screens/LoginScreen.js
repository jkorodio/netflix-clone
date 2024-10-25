import React, { useState } from 'react';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
          alt=''
        />

        <button onClick={() => setSignIn(true)} className='loginScreen__button'>
          Sign In
        </button>

        <div className='loginScreen__gradient' />
      </div>

      <div className='loginScreen__body'>
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className='loginScreen__input'>
              <form>
                <input type='email' placeholder='Email Address' />
                <button
                  onClick={() => setSignIn(true)}
                  className='loginScreen__getStarted'
                >
                  {' '}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
