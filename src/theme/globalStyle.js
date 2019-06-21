import { createGlobalStyle, css } from 'styled-components'

export const themes = {
  geeky: {
    font: 'Dosy',
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#bbbbbb',
    dark: '#222',
    bg: '#000084'
  },
  dracula: {
    font: 'Dosy',
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#f16623',
    light: '#fff',
    dark: '#222',
    bg: '#1C2123'
  }
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dosy';
    font-style: normal;
    font-weight: normal;
    src: url('/css/fonts/Fixedsys500c.eot');
    src: local('☺'), 
      url('/css/fonts/Fixedsys500c.woff') format('woff'), 
      url('/css/fonts/Fixedsys500c.ttf') format('truetype'), 
      url('/css/fonts/Fixedsys500c.svg') format('svg');
  }
  
  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

const sizes = {
  giant: 1500,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)