import styled from "styled-components";

type SpacerProps = {
    width?: number
};

const Spacer = styled.span<SpacerProps>`
  width: ${(props => props?.width ? `${props?.width}rem` : `2rem`)};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;


export {
    Spacer
}
