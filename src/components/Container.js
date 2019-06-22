import styled from 'styled-components'

const Container = styled.div`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.light};
  background-color: ${props => props.theme.bg};
  min-height: 100vh;
  padding: 20px 10px;

  *{
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.light};
  }

  h1, h2, h3, h4, h5, h6{
    margin: 10px 0;
    color: ${props => props.theme.tooLight};
    line-height: 20px;
    text-rendering: optimizelegibility;
  }

  a{
    color: ${props => props.theme.anchor};

    &:hover,
    &:focus{
      background: ${props => props.theme.anchorBg};
    }
  }

  hr{
    max-width: 80%;
    margin: 6px 0 7px;
    border: 0;
    border-top: 0px solid ${props => props.theme.light};
    border-bottom: 2px solid ${props => props.theme.tooLight};
  }
`
export default Container;