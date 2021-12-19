import PropTypes from 'prop-types';
import Friend from './Friend';
import styles from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <Friend
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
