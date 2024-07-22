export const colors = {
  black: '#101010',
  grayLight: '#DDDDDD',
};

const customMediaQuery = (maxWidth: number) => `(max-width: ${maxWidth}px)`;

export const media = {
  desktop: customMediaQuery(1920),
  notebook: customMediaQuery(1440),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(576),
};
