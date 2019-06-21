import styled from 'styled-components'

const Container = styled.div`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.light};
  background-color: ${props => props.theme.bg};
  text-align: center;
  min-height: 100vh;
  padding-top: 20px;

  *{
    font-family: ${props => props.theme.font};
  }
`
export default Container;