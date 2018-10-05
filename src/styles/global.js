import { injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0;
    background-color: #e9f1ea;
  }

  body {
    font-family: 'Roboto';
  }

  a,
  button {
    outline: none;
    border: none;
    background: transparent;
    text-decoration: none;
    color: ${theme.colorPrimary};
  }

  main {
    text-align: center;
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 100%;
  }

@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
`;
