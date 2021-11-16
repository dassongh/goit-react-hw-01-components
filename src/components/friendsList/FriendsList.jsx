import FriendListItem from '../friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (<ul className={s.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
    ))}
  </ul>);
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default FriendsList;