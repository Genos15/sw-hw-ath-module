import styled from "styled-components";
import NewUserBackground from "src/assets/img/login-image-add-user.svg";

const MyBorderImageNewUser = styled.div`
  position: absolute;
  bottom: 0;
  right: 35px;
  z-index: 1;
  background-color: ${({theme}) => theme.bgColor};

  &:before {
    background-image: url(${() => NewUserBackground});
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
    MyBorderImageNewUser
}
