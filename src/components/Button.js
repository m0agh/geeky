import styled from 'styled-components';

export const Btn = styled.button`
  padding: 10px 10px;
  font-size: 18px;
  color: ${props => props.theme.dark};
  background: ${props => props.theme.light};
  box-shadow: 10px 10px 0 ${props => props.theme.dark};
  border: 0;
  border-width: 0;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    color: ${props => props.theme.tooLight};
    background: ${props => props.theme.gray};
    outline: 0;
  }
`;
