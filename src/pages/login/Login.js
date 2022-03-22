import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginPageStyles } from './styles';
import { Input } from '../../ui/forms/input';
import { Label } from '../../ui/forms/label';
import { Button, Link } from '../../ui/buttons';
import CrystalShopLogo from '../../static/CrystalShopLogo.png';

function Login(props) {
  let navigation = useNavigate();

  function onHandleSubmit(evt) {
    evt.preventDefault();
    navigation('dashboard');
  }
  return ( 
    <>
      <main>
        <LoginPageStyles>
          <div>
            <h1>Welcome Back!</h1>
            <p>Sign in to Glitter & Glint Crystals Dashboard</p>

            <form onSubmit={ onHandleSubmit }>
              <Label>Email Address:</Label>
              <Input type="text" required/>
              <Label>Password:</Label>
              <Input type="text" required/>
              <Button>Sign In</Button>
            </form>
            <Link>Forgot Password</Link>
          </div>
          <div>
            <img src={CrystalShopLogo} alt="Crystal shop logo" />
          </div>
        </LoginPageStyles>
      </main>
    </>
  );
}

export default Login;