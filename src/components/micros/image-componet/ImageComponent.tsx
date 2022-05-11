import { stringify } from "querystring"

const ImageComponent = (prop: { src: string, width: string, marginTop: string }) => {

  return (
      <img src={prop.src} alt="scarecrow" width={prop.width} style={{'marginTop' : prop.marginTop}} />
  )
}

export default ImageComponent