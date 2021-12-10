import PropTypes from 'prop-types';
import styles from './Friend.module.css';
import React, { Fragment } from 'react';

function Friend(props) {
  const { name, avatar, status } = props;
  return (
    <Fragment>
      <span className={styles.status}>{status}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </Fragment>
  );
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
