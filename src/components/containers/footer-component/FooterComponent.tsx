import { Footer, FooterSimple } from "./FooterComponent.styled"

const FooterComponent = (prop: { author: string }) => {
  return (
      <Footer>
           <FooterSimple>created by <b>{ prop.author }</b> - devChallenges.io</FooterSimple>
      </Footer>
  )
}

export default FooterComponent