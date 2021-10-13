import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 50%;
  left: 50%;
  margin-left: 250px;
  transform: translate(-50%, -50%);
`;

export const Pokeball = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid black;
  animation: frames 0.8s linear 0s infinite;
  :after {
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid black;
    top: -4px;
  }
  :before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid black;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }
  /* AnimationFrames */
  @keyframes frames {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;