import Mainpage from './pages/Mainpage';
import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Mainpage />
    </>
  );
}

export default App;
