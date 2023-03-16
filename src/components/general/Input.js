import "./general.css"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Input({type, label, className, value, setValue, icon, inputAttributes}) {
  function handleInput(e) {
    setValue(e);
  }
  return (
    <div className={className + ' Input'}>
      
      <div className="InputLabel">
        {icon && <FontAwesomeIcon icon={icon} className="FontAwesomeIcon" />}
        <div style={{width: '6px'}}></div>
        <label>{label}</label>  
      </div>
      <input {...inputAttributes} type={type} onChange={(e) => {handleInput(e)}}></input>
      
    </div>
  );

}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  icon: PropTypes.any,
  inputAttributes: PropTypes.object,
};

Input.defaultProps = {
  label: "",
  type: "",
  className: "",
  value: "",
  setValue: () => {},
};
