import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themes } from './theme/globalStyle'
import ThemeSelect from './theme/ThemeSelect'
import Container from './components/Container'
import AppRoutes from './configs/routes';

class App extends Component {
  state = {
    theme: themes.geeky
  }
  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = themes.geeky) : (theme = themes.dracula)
    this.setState({ theme })
  }
  render() {
    return (
      <Router>
        <ThemeProvider theme={this.state.theme}>
          <Container>
            <GlobalStyle />
            <ThemeSelect handleThemeChange={this.handleThemeChange} />
            <AppRoutes />
          </Container>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App