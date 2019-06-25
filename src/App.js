import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, themes } from './theme/globalStyle';

import Container from './components/Container';
import NavbarHeader from './components/Navbar';
import MainFooter from './components/Footer';
import AppRoutes from './configs/routes';

class App extends Component {
  state = {
    theme: themes.geeky
  };
  handleThemeChange = e => {
    let theme = e.target.value;
    theme === 'theme1' ? (theme = themes.geeky) : (theme = themes.dracula);
    this.setState({ theme });
  };
  render() {
    return (
      <Router>
        <ThemeProvider theme={this.state.theme}>
          <Container>
            <GlobalStyle />
            <NavbarHeader handleThemeChange={this.handleThemeChange} />
            <AppRoutes />
            <MainFooter />
          </Container>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
