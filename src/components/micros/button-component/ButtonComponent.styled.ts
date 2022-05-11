import styled from "styled-components"

interface ContainerProps {
    backgroudColor: string
    color: string
}

const Button = styled.button<ContainerProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backgroudColor};
    width: 216px;
    height: 68px;
    margin-top: 5%;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.035em;
    text-transform: uppercase;

    @media(max-width: 800px) {
        margin-right: 10%;
        margin-left: 10%;

    }
   
`
export {
    Button
}