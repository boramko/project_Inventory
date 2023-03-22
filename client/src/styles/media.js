/*
const mediaQurey = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

const size = {
  mobileS: 375,
  mobileM: 568,
  mobildL: 768,
  tablet: 1024,
  desktopS: 1280,
  desktopM: 1440,
  desktopL: 1920,
};

export const { mobileS, mobileM, mobildL, tablet, desktopS, desktopM, desktopL } = size;

export const media = {
  mobileS: mediaQurey(mobileS), // @media (max-width: ${mobileS}px)
  mobileM: mediaQurey(mobileM),
  mobildL: mediaQurey(mobildL),
  tablet: mediaQurey(tablet),
  desktopS: mediaQurey(desktopS),
  desktopM: mediaQurey(desktopM),
  desktopL: mediaQurey(desktopL),
  custom: (maxWidth) => mediaQurey(maxWidth),
};
*/

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  desktopL: '3660px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
