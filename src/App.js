import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './router/Router';

const GlobalStyle = createGlobalStyle`
  ${reset}

    body {
    background-color: #5B2386;
    }
    
    @font-face {
    font-family: 'tvn';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'gmarket';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
   }


  
  button {
    cursor: pointer;
  }



`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
