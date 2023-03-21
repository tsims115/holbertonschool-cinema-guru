import './App.css';
import { useState, useEffect } from 'react';
import ls from 'local-storage';
import Authentication from './routes/auth/Authentication';
import axios from 'axios';
import Header from './components/navigation/Header'

export const url = 'http://54.157.183.35:8000/';

function App() {
  const [state, setState] = useState({isLoggedIn: false, userUsername: ""})
  useEffect(() => {
    let token = ls.get('accessToken');
    
    if (token !== null && state.isLoggedIn === false) {
      const options = {
        headers: {'Authorization': `Bearer ${token}`}
      };
      axios.post('http://54.157.183.35:8000/api/auth/',
        {},
        options
      )
      .then((res) => {
        setState({isLoggedIn: true, userUsername: res.data.username});
      });
    }
  });
  return (
    <div className="App">
      <Header userUsername='Tsims115' />
    </div>
  );
}

export default App;
