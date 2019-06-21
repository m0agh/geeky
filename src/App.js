import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themes } from './theme/globalStyle'
import ThemeSelect from './theme/ThemeSelect'
import Container from './components/Container'

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
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
        <GlobalStyle />
        <Container>
          <h1>Hello World!</h1>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </Container>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App