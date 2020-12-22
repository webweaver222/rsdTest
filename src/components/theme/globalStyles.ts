import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --primary: #38c9d9;
    --secondary : #3e77aa;
    --gray: #d2d2d2;
}

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
    }
    

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
	content: '';
    content: none;
}

table {
	border-collapse: collapse;
    border-spacing: 0;
}

@font-face {
    font-family: oxygen;
    src: url('src/resources/fonts/Oxygen-Light.ttf')
}

html, body {
    height: 100%;
    overflow-x: hidden;
    font-family: oxygen;
    font-size: 16px;
    box-sizing: border-box;
    min-width: 320px
}

*, *::before, *::after {
        box-sizing: inherit
    }

#root {
    height: 100%;
}

input {
    border: 1px solid var(--gray);;
    border-radius: 4px;
    padding: 8px;
}


button {
    background-color: #f5f5f5;
    box-shadow: inset 0 0 0 1px #ebebeb;
    border: 1px solid var(--gray);
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    color: var(--secondary)
  }

button:focus {
    outline: 0
}

button:hover {
    color: #5190c9
}



`;

export default GlobalStyles;
