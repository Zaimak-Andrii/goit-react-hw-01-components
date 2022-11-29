import styled from 'styled-components';
import { color, space, compose, flexbox, background } from 'styled-system';

const Box = styled('div')(compose(color, space, flexbox, background));

export default Box;
