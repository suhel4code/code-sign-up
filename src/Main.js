import mobileSignUp from './assets/images/illustration-sign-up-mobile.svg';
import desktopSignUp from './assets/images/illustration-sign-up-desktop.svg';
import check from './assets/images/icon-list.svg';
import { useEffect, useRef, useState } from 'react';
import './main.css';

function getDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function Main({ onSuccess, email, setEmail }) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [dimension, setDimension] = useState(getDimension());

  const inputRef = useRef(null);
  const imgToShow = dimension.width > 724 ? desktopSignUp : mobileSignUp;

  const classNamePara = inputRef.current && !isEmailValid ? 'error-msg' : '';
  const classNameInput =
    inputRef.current && !isEmailValid ? 'error-msg input-error' : '';

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  useEffect(() => {
    const getActual = () => {
      setDimension(getDimension());
    };

    window.addEventListener('resize', getActual);

    return () => window.removeEventListener('resize', getActual);
  }, []);

  const onChange = (event) => {
    const currValue = event.target.value;
    setEmail(currValue);
    if (validateEmail(currValue)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div className='center-div'>
      <div className='main-container'>
        <div className='div-main-img'>
          <img className='main-img' src={imgToShow} alt='' />
        </div>
        <div className='container'>
          <h1 className='title'>Stay updated!</h1>
          <p className='first-para'>Join 60,0000+ product managers recieving</p>
          <p>monthly updates on:</p>
          <ul>
            <li>
              <div className='inline'>
                <img src={check} alt='' />
                <p>Product discovery and building what</p>
              </div>
              <p className='second-para'>matters</p>
            </li>
            <li>
              <div className='inline'>
                <img src={check} alt='' />
                <p>Measuring to ensure updates are a</p>
              </div>
              <p className='second-para'>success</p>
            </li>
            <li>
              <div className='inline'>
                <img src={check} alt='' />
                <p>And much more</p>
              </div>
            </li>
          </ul>
          <div className='main-content'>
            <div className='input-help'>
              <p>Email address</p>
              {classNamePara && (
                <p className={classNamePara}>Valid email required</p>
              )}
            </div>
            <input
              ref={inputRef}
              className={classNameInput}
              type='email'
              placeholder='email@company.com'
              value={email}
              onChange={onChange}
            />
            <button disabled={!isEmailValid} onClick={() => onSuccess()}>
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
