
import '../index.css'

const SectionCompo = ({title, children}) => {
    return (
        <div className='w-[80%] mx-auto flex flex-col gap-3'>
          <h2 className="text-[24px]">{title}</h2>
          {children}
        </div>
    )
}

export default SectionCompo