import { Outlet, useMatch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

const GlobalStyle = createGlobalStyle<{ isPortrait: boolean }>`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  html {
    // max-width: ${(props) => (props.isPortrait ? "414px" : null)};
    // max-height: ${(props) => (props.isPortrait ? "896px" : null)};
    // margin: ${(props) => (props.isPortrait ? "auto" : null)};
  }
  body, #root {
    // width: 100%;
    // line-height: 1;
  }
  menu, ol, ul {
    // list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    // font-family: 'Source Sans Pro', sans-serif;
    // background-color: ${(props) => props.theme.ku.bgcolor};
    // color: black;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function Merchant() {
	const isMainUrl = useMatch("/:merchant");

	return (
		<>
			{/* <GlobalStyle isPortrait /> */}
			<div className="sm:w-3/5 mx-auto">
				<Header />
				{/* {isMainUrl ? <div style={{ color: "red" }}>test</div> : null} */}
				<Outlet />
			</div>
		</>
	);
}

export default Merchant;
