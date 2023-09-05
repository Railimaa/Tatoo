import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import defaultheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './style';

import Router from '../../Router';
import Header from '../Header';
import Footer from '../Footer';

function App() {
  return (

    <BrowserRouter>

      <ThemeProvider theme={defaultheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <Router />
          <Footer />
        </Container>

      </ThemeProvider>

    </BrowserRouter>

  );
}

export default App;
