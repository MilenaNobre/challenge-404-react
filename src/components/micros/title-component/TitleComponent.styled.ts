import styled from "styled-components"

interface ContainerProps {
    fontWeight: string
    fontSize: string
    lineHeight: string
    marginRight: string
}

const Title = styled.p<ContainerProps>`
    font-family: monospace;
    font-style: normal;
    letter-spacing: -0.035em;

    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    margin-right: ${(props) => props.marginRight};
    color: ${(props) => props.color};

    @media(max-width: 800px) {
        margin-right: 10%;
        margin-left: 10%;
    }

`

export {
    Title
}