import { useState } from 'react';
import './App.css';

import Navbar from "./components/navbar/Navbar";
import Dashboard from './Dashboard';

function App() {
    const [classnames, setClassnames] = useState({ loginSuccess: '', loadAfterLogin: '' })

  return (
    <div className="App">
  <Navbar classnames={classnames} setClassnames={setClassnames} />
  <Dashboard classnames={classnames} setClassnames={setClassnames}  />
    </div>
  );
}

export default App;
