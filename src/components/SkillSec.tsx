import '../index.css'



const SkillSec = ({ title, children }) => {
  return (
         <div className='border-[#F1D6E0] border-3 rounded-sm w-fit p-6'>
          <h3 className='font-["Kameron"] font-bold text-[21px] mb-[-2]'>{title}</h3>
          <ul className='list-disc pl-5 font-["Kameron"] leading-loose'>
            {children}
          </ul>
         </div>
  )
}

export default SkillSec