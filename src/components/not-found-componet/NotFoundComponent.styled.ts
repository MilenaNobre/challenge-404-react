import styled from "styled-components"

interface ContainerProps {
    backgroudColor: string
}

const Box = styled.div<ContainerProps>`
    width: 300px;
    height: 300px;
    background-color: ${(props) => props.backgroudColor};
`
export {
    Box
}