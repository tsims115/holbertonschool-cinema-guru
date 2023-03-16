import './auth.css';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import PropTypes from 'prop-types';

export default function Register({username, password, setUsername, setPassword}) {
  return (
    <div className='Register'>
      <h3>Create a new account</h3>
      <Input label='Username' icon={faUser} setValue={setUsername} />
      <Input label='Password' icon={faKey} setValue={setPassword} />
      <Input type='submit'  />
    </div>
  );
}

Register.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
}

Register.defaultProps = {
  username: "",
  password: "",
  setUsername: () => {},
  setPassword: () => {}
}
