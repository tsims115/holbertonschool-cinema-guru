import './auth.css';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import PropTypes from 'prop-types';

export default function Login({username, password, setUsername, setPassword}) {
  
  return (
    <div className='Login'>
      <h3>Sign in with your account</h3>
      <Input label='Username' icon={faUser} setValue={setUsername} />
      <Input label='Password' icon={faKey} setValue={setPassword}/>
      <Input type='submit' />
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
}

Login.defaultProps = {
  username: "",
  password: "",
  setUsername: () => {},
  setPassword: () => {}
}
