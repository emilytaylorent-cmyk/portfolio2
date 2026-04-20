import '../index.css'


const SectionHolder = ({ children }: {children: React.ReactNode}) => {
    return (
      <div className='max-w-370 mx-auto px-[10%]'>
        {children}
      </div>
    )
}

export default SectionHolder