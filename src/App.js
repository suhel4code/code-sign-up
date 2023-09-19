import { useState } from 'react';
import Success from './Success';
import Main from './Main';
import './App.css';

function App() {
  const [success, setSucess] = useState(false);

  return success ? (
    <Success email={'hi@gmail.com'} />
  ) : (
    <Main onSuccess={() => setSucess(true)} />
  );
}

export default App;
