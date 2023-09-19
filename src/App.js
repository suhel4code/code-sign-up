import { useState } from 'react';
import Success from './Success';
import Main from './Main';

function App() {
  const [success, setSucess] = useState(false);
  const [email, setEmail] = useState('');

  return success ? (
    <Success email={email} />
  ) : (
    <Main onSuccess={() => setSucess(true)} email={email} setEmail={setEmail} />
  );
}

export default App;
