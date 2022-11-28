import PropTypes from 'prop-types';
import UserInfo from 'components/userinfo/UserInfo';
import css from './Profile.module.css';
import UserStats from 'components/userstats/UserStats';

export default function Profile({ username, tag, location, stats, avatar }) {
  return (
    <div className={css.profile}>
      <UserInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
