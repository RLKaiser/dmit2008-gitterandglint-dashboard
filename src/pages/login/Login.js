import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { BiMessageError } from 'react-icons/bi';

import { auth } from 'libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoginPageStyles, LoginPageContainer } from './styles';
import { Input } from '../../ui/forms/input';
import { Label } from '../../ui/forms/label';
import { Button, Link } from '../../ui/buttons';
import CrystalShopLogo from '../../static/CrystalShopLogo.png';

function Login(props) {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const notify = (error) => toast.error(error.code,{
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: <BiMessageError/>
  });

  function onHandleSubmit(evt) {
    evt.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential=>{
      navigator('dashboard')
    })
    .catch(error=>{
      notify(error);
    })
  }
  return ( 
    <>
      <main>
        <LoginPageStyles>
        <ToastContainer/>
          <LoginPageContainer>
            <div>
              <h1>Welcome Back!</h1>
              <p>Sign in to Glitter & Glint Crystals Dashboard</p>

              <form onSubmit={ onHandleSubmit }>
                <Label>Email Address:</Label>
                <Input type="text" required placeholder="janedo@gmail.com" onChange={ (evt)=>setEmail(evt.target.value) }/>
                <Label>Password:</Label>
                <Input type="text" required placeholder="account password" onChange={ (evt)=>setPassword(evt.target.value) }/>
                <Button>Sign In</Button>
              </form>
              <Link>Forgot Password</Link>
            </div>
            <div>
              <img src={CrystalShopLogo} alt="Crystal shop logo" />
            </div>
          </LoginPageContainer>
        </LoginPageStyles>
      </main>
    </>
  );
}

export default Login;