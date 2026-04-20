
import '../index.css'

const ImgHolder = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex flex-row justify-between'>
          {children}
        </div>
    )
}

export default ImgHolder