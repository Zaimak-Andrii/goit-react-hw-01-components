import Box from 'components/Box/Box.styled';
import PropTypes from 'prop-types';
import { List, StatisticItem } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Box as="section">
      {title && <h2>Upload stats</h2>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticItem>
        ))}
      </List>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
