import { getRandomHexColor } from 'utils';

export const theme = {
  colors: {
    white: '#fff',
    grey: 'grey',
    online: 'green',
    offline: 'red',
    random: getRandomHexColor,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    small: '5px',
    medium: '10px',
    large: '20px',
    circle: '50%',
  },
  shadows: {
    box: '0px 3px 3px -2px rgba(66, 68, 90, 1)',
  },
};
