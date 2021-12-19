import PropTypes from 'prop-types';
import styles from './Friend.module.css';

function Friend(props) {
  const { name, avatar, isOnline } = props;
  return (
    <>
      <span className={isOnline ? styles.on : styles.off}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
