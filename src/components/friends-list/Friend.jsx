import PropTypes from 'prop-types';

function Friend(props) {
  const { name, avatar, status } = props;
  return (
    <li class="item">
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
