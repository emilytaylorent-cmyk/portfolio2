import '../index.css'


const Header = () => {
    return (

            <div className='w-full bg-[#f9f9f9] flex flex-row items-center px-[10%] border-b-2 border-pink-200'>
                <h1 className='text-[30px]'>Emily Taylor</h1>
                {/* <p>Created with React, TypeScript, and Tailwind CSS</p> */}

        
                    <ul className='w-[40%] flex flex-row justify-between ml-[15%]'>
                        <li className='text-[18px] hover:bg-pink-200 hover:cursor-pointer h-full p-4 px-6'>About</li>
                        <li className='text-[18px] hover:bg-pink-200 hover:cursor-pointer p-4 px-6'>Projects</li>
                        <li className='text-[18px] hover:bg-pink-200 hover:cursor-pointer p-4 px-6'>Contact</li>
                    </ul>
            </div>
    )
}

export default Header