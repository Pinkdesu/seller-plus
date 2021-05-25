import { keyframes, css } from 'styled-components';

export const loading = keyframes`
   0% {
      background-color: #EEEEEE;
   }
   25% {
      background-color: #DDDDDD;
   }
   50% {
      background-color: #EEEEEE;
   }
   75% {
      background-color: #F8F8F8;
   }
   100% {
      background-color: #EEEEEE;
   }
`;

export const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const loadingAnimation = css`
  background-color: #eeeeee;
  animation-name: ${loading};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-iteration-count: 13;
`;
