import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /*  CSS RESET */

  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    -webkit-font-smoothing: antialiased !important;
  }

  *,
  body,
  input,
  button,
  textarea,
  select {
    font-family: 'Roboto' , sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  desktop: customMediaQuery(1920),
  notebook: customMediaQuery(1440),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(576),
};

export default GlobalStyle;