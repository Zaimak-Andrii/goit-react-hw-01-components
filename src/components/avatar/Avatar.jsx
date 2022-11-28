import PropTypes from 'prop-types';
import css from './Avatar.module.css';

export default function Avatar({ url }) {
  const defaultAvatarUrl =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

  return (
    <img
      src={url ?? defaultAvatarUrl}
      alt="User avatar"
      className={css.avatar}
    />
  );
}

Avatar.propTypes = {
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
};
