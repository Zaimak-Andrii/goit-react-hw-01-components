import styled from 'styled-components';
import { flex } from 'styled-system';

export const List = styled.ul`
  display: flex;
`;

export const StatisticItem = styled.li(({ theme }) => ({
  padding: theme.space[3],
  color: theme.colors.white,
  backgroundColor: theme.colors.random(),
}));
