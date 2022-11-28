import PropTypes from 'prop-types';
import { numberWithCommas } from 'utils';
import css from './UserStats.module.css';

export default function UserStats({ followers, views, likes }) {
  return (
    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{numberWithCommas(followers)}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{numberWithCommas(views)}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{numberWithCommas(likes)}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
