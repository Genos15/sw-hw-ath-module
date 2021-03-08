import styled from "styled-components";
import LoginBackground from "src/assets/img/login-image-recovery.svg";
import RenewPasswordBackground from "src/assets/img/login-image-confirm-password.svg";

const FormIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RecoveryContainer = styled.div`

  background-color: ${({theme}) => theme.bgColor};
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 90vh;
  align-items: flex-start;
  margin: 0 0 0 50px;
  position: relative;

  ${FormIn} {
    max-width: 400px;
  }
`;


const MyBorderImageRecovery = styled.div`
  position: absolute;
  bottom: -10%;
  right: 35px;
  z-index: 1;
  background-color: ${({theme}) => theme.bgColor};

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


const MyBorderImageRenewPassword = styled.div`
  position: absolute;
  bottom: -10%;
  right: 35px;
  z-index: 1;
  background-color: ${({theme}) => theme.bgColor};

  &:before {
    background-image: url(${() => RenewPasswordBackground});
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
    RecoveryContainer,
    MyBorderImageRecovery,
    MyBorderImageRenewPassword,
    FormIn
};
