import {Form} from "carbon-components-react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const AuthContainer = styled.div`
  max-width: 50vw;
  height: 100vh;
  padding: 0 0 0 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
  background-color: ${({theme}) => theme.bgColor};
`;

const LoginPanel = styled.div`
  width: 400px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export {
    AuthContainer,
    LoginPanel,
    CustomForm,
}
