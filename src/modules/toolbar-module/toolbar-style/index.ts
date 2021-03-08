import styled from "styled-components";
import {LanguageSwitcherPanel} from "src/modules/language-switcher-module/language-switcher-style";


const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({theme}) => theme.bgColor};
  padding: 20px 0 0 50px;
  justify-content: flex-start;

  ${LanguageSwitcherPanel} {
    max-width: 400px;
  }
`;


export {
    ToolbarContainer
}
