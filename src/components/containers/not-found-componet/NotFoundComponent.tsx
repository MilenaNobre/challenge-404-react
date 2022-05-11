import PropTypes from "prop-types"
import { Box, Title, Container } from './NotFoundComponent.styled'
import ImageComponent from "../../micros/image-componet/ImageComponent"
import ButtonComponent from "../../micros/button-component/ButtonComponent"
import TitleComponent from "../../micros/title-component/TitleComponent"
import FooterComponent from "../footer-component/FooterComponent"

const Scarecrow =  require("../../../assets/scarecrow.png")

const NotFoundComponent = (prop: { alignItems: string }) => {
  return (
    <div>
      <Title>not found 404</Title>
      <Container>
        <Box alignItems={prop.alignItems}> 
           <ImageComponent src={Scarecrow}  width="60%" marginTop='45px' />
        </Box>
        <Box alignItems="start"> 
            <TitleComponent label='I have bad news for you' fontWeight='700' fontSize='64px' lineHeight='95px' marginRight='20%' />
            <TitleComponent label='The page you are looking for might be removed or is temporarily unavailable' 
                fontWeight='400' fontSize='24px' lineHeight='36px' marginRight='40%' color='#4F4F4F' />
  
            <ButtonComponent label="Back to homepage" color='#fff' backgroudColor="#333333"/>
        </Box>        
      </Container> 
      <FooterComponent author="Milena Nobre"/>    
    </div>
  )
}

NotFoundComponent.propTypes = {
  alignItems: PropTypes.string
}
NotFoundComponent.defaultProps = {
  alignItems: 'center'
}

export default NotFoundComponent