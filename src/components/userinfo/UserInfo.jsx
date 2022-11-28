import PropTypes from 'prop-types';
import Avatar from 'components/avatar/Avatar';
import css from './UserInfo.module.css';

export default function UserInfo({ avatar, username, tag, location }) {
  return (
    <div className={css.description}>
      <Avatar url={avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
};
