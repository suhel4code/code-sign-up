import logo from './assets/images/icon-success.svg';
import './success.css';

export default function Success({ email }) {
  return (
    <div className='center-div'>
      <div className='success-container'>
        <img src={logo} alt='' />
        <div className='flex'>
          <h1>Thanks for</h1>
          <h1>subscribing</h1>

          <p className='success-p'>
            A confirmation email has been sent to
            <br />
            {email}. Please open it and
            <br /> click the button inside to confirm your
            <br />
            subscription
          </p>

          <button className='item'>Dismiss message</button>
        </div>
      </div>
    </div>
  );
}
