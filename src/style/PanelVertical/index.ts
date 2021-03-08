import styled from "styled-components"
import {InnerPanelV} from "src/style/InnerPanelV";

const PanelVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({theme}) => theme.bgColor};
  width: 100vw;
  height: 100%;
  position: relative;

  ${InnerPanelV} {
    margin-bottom: 20px;
  }
`;

export {
    PanelVertical
}
