import styled from "styled-components"
import {FormControl} from "../FormControl";

type PanelHorizontalProps = {
    maxWidth?: number;
}

const PanelHorizontal = styled.div<Partial<PanelHorizontalProps>>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: ${(p: Partial<PanelHorizontalProps>) => p.maxWidth ? `${p.maxWidth}%` : '100%'};

  ${FormControl} {
  }
`;

export {
    PanelHorizontal
}
