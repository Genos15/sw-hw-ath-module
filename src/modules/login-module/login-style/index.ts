import styled from "styled-components";
import LoginBackground from "../../../assets/img/login-image-2.svg";

const Panel = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.bgColor};
  color: ${({theme}) => theme.textColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

const MyBorderImage = styled.div`
  position: absolute;
  top: 25%;
  right: 35px;
  z-index: 1;

  &:before {
    background-image: url(${() => LoginBackground});
    background-size: contain;
    background-repeat: no-repeat;
    content: "";
    display: inline-block;
    vertical-align: center;
    horiz-align: center;
    width: 30vw;
    height: 30vw;
  }
`;


export {
    Panel,
    MyBorderImage
}
