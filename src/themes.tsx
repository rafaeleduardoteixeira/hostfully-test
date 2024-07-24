export const colors = {
  black: '#101010',
  grayInput: '#f5f5f5',
  grayLight: '#DDDDDD',
  gray: '#999999',
  grayDark: '#666666',
  hostfullyPrimaryColor: '#40caa1',
  hostfullyPrimaryColorHover: '#3bbf9a',
  hostfullySecondaryColor: '#2D2AA5',
  hostfullySecondaryColorDark: '#1E1C7A',
  red: '#df2525',
  redDarker: '#c41e1e',
};

const customMediaQuery = (maxWidth: number) => `(max-width: ${maxWidth}px)`;

export const media = {
  desktop: customMediaQuery(1920),
  notebook: customMediaQuery(1440),
  tablet: customMediaQuery(1024),
  miniTablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
