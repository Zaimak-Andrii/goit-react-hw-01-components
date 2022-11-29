import Profile from 'components/profile/Profile';
import Statistics from './statistics/Statistics';
import user from 'data/user.json';
import stats from 'data/statistics.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
    </>
  );
};
