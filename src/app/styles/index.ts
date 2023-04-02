import { css } from "twin.macro";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  *,
  body,
  button {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  *::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
