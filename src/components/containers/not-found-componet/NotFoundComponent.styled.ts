import styled from "styled-components"

interface ContainerProps {
    alignItems: string
}

const Box = styled.div<ContainerProps>`
   height: auto;    
   display: flex;
   flex-flow: column wrap;
   align-items: ${(props) => props.alignItems};;
`
const Title = styled.div`
    font-family: 'Inconsolata', monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    text-transform: uppercase;
    margin: 3%;
    
`
const Container = styled.div`
    display: flex;
    flex-flow: row;    

    @media(max-width: 800px) {
        flex-flow: column;
  }

`

export {
    Box,
    Title,
    Container
}