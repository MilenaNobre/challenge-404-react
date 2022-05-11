import PropTypes from "prop-types"
import { Title } from './TitleComponent.styled'

type props = { 
    label: string, 
    color: string , 
    fontWeight: string, 
    fontSize: string, 
    lineHeight: string,
    marginRight: string
}

const TitleComponent = (prop: props) => {
  return (
    <Title 
        color={prop.color} 
        fontWeight={prop.fontWeight} 
        fontSize={prop.fontSize} 
        lineHeight={prop.lineHeight} 
        marginRight={prop.marginRight}> {prop.label} </Title>
  )
}

TitleComponent.propTypes = {
  color: PropTypes.string
}

TitleComponent.defaultProps = {
    color: '#000'
}

export default TitleComponent