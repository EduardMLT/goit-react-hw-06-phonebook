import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin: auto;
    padding: 5px;
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

img {
    display: block;
}

a {
    text-decoration: none;
}

button {
  border-radius: 5px;
  border: 1px solid;
  margin-left: 10px;
}
`;
