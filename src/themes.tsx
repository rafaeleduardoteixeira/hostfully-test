export const colors = {
  black: '#101010',
  grayLight: '#DDDDDD',
  gray: '#999999',
  grayDark: '#666666',
};

const customMediaQuery = (maxWidth: number) => `(max-width: ${maxWidth}px)`;

export const media = {
  desktop: customMediaQuery(1920),
  notebook: customMediaQuery(1440),
  tablet: customMediaQuery(1024),
  miniTablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
