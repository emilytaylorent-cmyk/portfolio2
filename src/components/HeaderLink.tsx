import '../index.css'

const HeaderLink = (name) => {
    return (
        <a className='hover:bg-[#D2E4E4] hover:text-black p-2 hover:cursor-pointer'>
            <p>{name}</p>
        </a>
    )
}

export default HeaderLink