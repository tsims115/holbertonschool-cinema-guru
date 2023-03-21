import { useState, useNa, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './navigation.css';
import axios from 'axios';
import { url } from '../../App';
import { ls } from 'local-storage';
import Activity from '../components/Activity';

export default function SideBar() {
  const navigate = useNavigate();
  const options = {
    headers: {
      Authorization: 'Bearer ' + ls.get('accessToken')
    }
  };
  function setPage(pageName) {
    setState({
      selected: pageName,
      small: state.small,
      activities: state.activities,
      showActivities: state.showActivities
    });
    navigate(pageName);
  }
  useEffect(() => {
    axios.get(
      url + 'api/activity',
      {},
      options
    )
    .then((res) => {
      setState({
        selected: pageName,
        small: state.small,
        activities: res.data,
        showActivities: state.showActivities
      });
    });
  })
  const [state, setState] = useState({selected: "home", small: true, activities: [], showActivities: false});
  let activities = [];
  for (let i = 0; i < 10; i++) {
    activities.push(<Activity activity={state.activities[i]} />);
  }
  return (
    <nav>
      <ul>
        <li onClick={() => {setPage('/home')}}>Home</li>
        <li onClick={() => {setPage('/Favorites')}}>Favorites</li>
        <li onClick={() => {setPage('/watchLater')}}>Watch Later</li>
      </ul>
      <ul>
        {activities}
      </ul>
    </nav>
  );
}

SideBar.propTypes = {
  
}
