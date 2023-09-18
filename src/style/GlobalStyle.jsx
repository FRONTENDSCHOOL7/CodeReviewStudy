import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import NotoRegular from "./fonts/NotoSansKR-Regular.ttf";

import tvnLight from "./fonts/tvNEnjoystoriesLight.ttf";
import tvnMedium from "./fonts/tvNEnjoystoriesMedium.ttf";
import tvnBold from "./fonts/tvNEnjoystoriesBold.ttf";

import GmarketLight from "./fonts/GmarketSansTTFLight.ttf";
import GmarketMedium from "./fonts/GmarketSansTTFMedium.ttf";
import GmarketBold from "./fonts/GmarketSansTTFBold.ttf";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
      font-family: 'NotoRegular';
      src: url(${NotoRegular}) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'tvnLight';
      src: url(${tvnLight}) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'tvnMedium';
      src: url(${tvnMedium}) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'tvnBold';
      src: url(${tvnBold}) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'GmarketSansLight';
      src: url(${GmarketLight}) format('woff');
      font-weight: normal;
      font-style: normal; 
    }

    @font-face {
      font-family: 'GmarketSansMedium';
      src: url(${GmarketMedium}) format('woff');
      font-weight: normal;
      font-style: normal; 
    }

    @font-face {
      font-family: 'GmarketSansBold';
      src: url(${GmarketBold}) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    :root{
        --color-main : #5b2386;
        --color-point : #FCEE21;
        --color-white : #fff;

        --font-NotoRegular:"NotoRegular";

        --font-tvnLight:"tvnLight";
        --font-tvnMedium:"tvnMedium";
        --font-tvnBold:"tvnBold";

        --font-GLight : "GmarketSansLight";
        --font-GMidium : "GmarketSansMedium";
        --font-GBold : "GmarketSansBold";
        }

    body{
      font-family: var( --font-GMidium);
      background : var( --color-main);
      color : var(--color-white);
      font-size : 24px;
    }
    button{
      border : none;
      cursor : pointer;
      font:inherit;
    }

    input{
      border:none;
      font:inherit;
    }

    * {
    box-sizing: border-box;
    }

    .hidden{
      overflow: hidden;
      position: absolute;
      clip:     rect(0 0 0 0); /* IE 6,7 */
      clip:     rect(0,0,0,0);
      width:    1px;
      height:   1px;
      margin:   -1px;
      border:   0;
      padding:  0;
    }
`;

export default GlobalStyle;
