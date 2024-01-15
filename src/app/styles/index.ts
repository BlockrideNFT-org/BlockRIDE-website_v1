import { css } from "twin.macro";

const GlobalStyles = css`
  @font-face {
    font-family: "Founders Grotesk";
    src: url("../assets/fonts/FoundersGrotesk-Light.otf") format("otf");
    font-weight: 300;
  }

  @font-face {
    font-family: "Founders Grotesk";
    src: url("../assets/fonts/FoundersGrotesk-Regular.otf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Founders Grotesk";
    src: url("../assets/fonts/FoundersGrotesk-Medium.otf");
    font-weight: 500;
  }

  @font-face {
    font-family: "Founders Grotesk";
    src: url("../assets/fonts/FoundersGrotesk-SemiBold.otf");
    font-weight: 600;
  }

  @font-face {
    font-family: "Founders Grotesk";
    src: url("../assets/fonts/FoundersGrotesk-Bold.otf");
    font-weight: 700;
  }

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
    font-family: "Founders Grotesk", -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    background: #fffaf3;
  }

  button {
    cursor: pointer;
  }

  /* code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  } */

  *::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
