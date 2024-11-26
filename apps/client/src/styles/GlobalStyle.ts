import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --transition: all 300ms ease-in-out;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
  }

  /* TinyMCE Styles */
   .tox-notification--warning {
    display: none !important;
  }

  .tox-dialog-wrap__backdrop {
    background-color: unset !important;
    backdrop-filter: blur(20px);
  }

  .tox-dialog {
    border-radius: 8px !important;
  }

  /* Slick Carousel Styles */
  .stick-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-prev, .slick-next {
    z-index: 10;
  }

  .slick-dots li button:before {
    color: gray;
    content: "";
  }

  .slick-dots li.slick-active button:before {
    color: black;
  }

   .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    touch-action: pan-y;
  }

  .slick-list {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
  }

  .slick-track {
    position: relative;
    display: flex;
  }

  .slick-slide {
    display: none;
    float: center;
    height: 100%;
    min-height: 1px;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-prev, .slick-next {
    color: ${({ theme }) => theme.palette.primary.light};
    border: none;
    cursor: pointer;
    position: absolute;
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-prev:before, .slick-next:before {
   content: "";
  }

  .slick-prev {
    left: -25px;
  }

  .slick-next {
    right: -25px;
  }

  .slick-dots {
    display: block;
    list-style: none;
    padding: 8px 0;
    text-align: center;
  }

  .slick-dots li {
    display: inline-block;
    margin: 0 2px;
  }

  .slick-dots li button {
    display: block;
    width: 8px;
    height: 8px;
    padding: 0;
    border: none;
    border-radius: 50%;
    font-size: 0;
    background: ${({ theme }) => theme.palette.divider};
    cursor: pointer;
  }

  .slick-dots li.slick-active button {
    background: ${({ theme }) => theme.palette.primary.light}; 
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: gray;
  }

  .slick-dots li.slick-active button:before {
    color: black;
  }

`;
