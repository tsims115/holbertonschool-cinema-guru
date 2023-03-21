import './navigation.css';
import PropTypes from 'prop-types';

export default function Activity(activity) {
  
  return (
    <li className='Activity'>
      <p><em>{activity.user.username}</em> added <em>{activity.title.title}</em> to watch later - <em>{activity.createdAt}</em></p>
    </li>
  );
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired
}
