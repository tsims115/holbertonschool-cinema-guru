import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./general.css"
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function SearchBar({title, setTitle}) {
  function handleInput(e) {  
    setTitle(e.target.value)
  }
  return (
    <div className="SearchBar">
      <FontAwesomeIcon icon={faSearch} style={{color: 'grey'}}/>
      <input type='text' placeholder={title} onChange={(e) => handleInput(e)} />
    </div>
  );

}

SearchBar.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

SearchBar.defaultProps = {
  title: "",
  seTitle:  () => {}
};
