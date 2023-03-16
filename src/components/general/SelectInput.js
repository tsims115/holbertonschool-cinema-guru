import "./general.css"
import PropTypes from 'prop-types';


export default function SelectInput({label, options, className, value, setValue}) {
  function handleSelect(e) {
    setValue(e.target.value);
  }
  const options_list = options.map((opt) =>
    <option value={opt}>{opt}</option>
  );
  return (
    <div className={className + " SelectInput"}>
      <label>{label}:</label>
      <select selected={value} onChange={(e) => {handleSelect(e)}}>
        <option value='default'>Default</option>
        {options_list}
      </select>
    </div>
  );

}

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
};

SelectInput.defaultProps = {
  label: "",
  options: [],
  className: "",
  value: "",
  setValue: () => {},
};
