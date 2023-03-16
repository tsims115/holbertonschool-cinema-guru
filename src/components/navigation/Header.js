import './navigation.css';
import PropTypes from 'prop-types';
import ls from 'local-storage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({userUsername, setIsLoggedIn}) {
  function logout() {
    ls.remove('accessToken');
    setIsLoggedIn();
  }
  return (
    <nav className='Header'>
      <h3>Cinema Guru</h3>
      <div style={{display: 'flex', }}>
        <img src="https://picsum.photos/100/100" />
        <p>Welcome, {userUsername} <span onClick={() => {logout()}}><em>(Logout)</em></span></p>
      </div>
    </nav>
  );
}

Header.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func
}
