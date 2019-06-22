import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: 30px;
  color: ${props => props.theme.dark};
  padding: 10px;
  border: 1px solid ${props => props.theme.light}
  max-width: 90%;

  p{
    margin: 0;
  }
`

class MainFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Footer>
          <p>Made with <a href="/">❤︎</a> by Me ;)</p>
        </Footer>
      </React.Fragment>
    )
  }
}

export default MainFooter