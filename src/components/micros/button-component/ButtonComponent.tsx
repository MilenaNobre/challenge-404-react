import PropTypes from "prop-types"
import { Button } from './ButtonComponent.styled'

const ButtonComponent = (prop: { label: string, backgroudColor: string , color: string}) => {
  return (
    <Button backgroudColor={prop.backgroudColor} color={prop.color}>{prop.label}</Button>
  )
}

ButtonComponent.propTypes = {
  backgroudColor: PropTypes.string,
  color: PropTypes.string
}

ButtonComponent.defaultProps = {
    backgroudColor: '#f8f0f0',
    color: '#000'
}

export default ButtonComponent