import '../index.css'


import FlowLeft from "../assets/pictures/FlowerFlowLeft.svg"
import FlowRight from "../assets/pictures/FlowerFlowRight.svg"

const FlowerFlowSection = ({ children }) => {
  return (
    <div className='max-w-370 mx-auto'>
      <img src={FlowLeft} />
      <div className='px-[10%]'>
        {children}
      </div>
      <img src={FlowRight} />
    </div>
  )
}

export default FlowerFlowSection