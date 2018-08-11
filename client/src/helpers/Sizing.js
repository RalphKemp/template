import { css } from 'styled-components';

export const sizes = {
  desktopLarge: 1679,
  desktop: 1439,
  tablet: 1022,
  mid: 600,
  mobilePlus: 413,
  mobileSmall: 319
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
