import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css"
import PropTypes from 'prop-types';


export default function Button({label, className, onClick, icon}) {
  return (
    <div className={"Button " + className}>
      <button form="signOnForm" onClick={(e) => onClick(e)} >
        {icon && <FontAwesomeIcon icon={icon}/>}
        <label>{label}</label>
      </button>
    </div>
  );

}

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.any,
};

Button.defaultProps = {
  label: "",
  className: "",
  onClick:  () => {}
};
