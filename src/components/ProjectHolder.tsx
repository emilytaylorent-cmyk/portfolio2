import React from 'react'

function ProjectHolder({ link, imge, title, list }) {
    return (
        <div>
            <a href={link} className='hover:cursor-pointer hover:shadow-lg'>
                <div className='bg-gray-300 rounded-md h-40 w-50 hover:shadow-lg' >
                    <div className='bg-[#619394] rounded-t-md p-1 px-2 text-white'>
                        <h2 >{title}</h2>
                    </div>
                        <img className='rounded-b-md object-cover min-h-[80%] max-h-[80%] min-w-full' src={imge} />
                </div>
            </a>
            <p>Skills: {list}</p>
        </div>
    )
}

export default ProjectHolder