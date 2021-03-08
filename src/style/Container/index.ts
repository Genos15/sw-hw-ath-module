import styled from "styled-components";

type ContainerProps = {
    start?: boolean;
};

const Container = styled.div<Partial<ContainerProps>>`
  width: 100%;
  height: 100%;
`;

export {
    Container
};
