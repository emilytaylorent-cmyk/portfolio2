// src/App.tsx (or main.tsx, depending on your setup)

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Logo from './assets/pictures/Logo.svg'



import Projects from './pages/Project.tsx';
import Contact from './pages/Logos.tsx';
import About from './pages/Websites.tsx';

function App() {
    return (
        <BrowserRouter>
            <div className='w-full bg-[#f9f9f9] flex flex-row px-[5%] border-b-2 items-end border-[#C999BC]'>
                <Link to="/"><img src={Logo} alt="Company Logo" width="200" /></Link>
                {/* <p>Created with React, TypeScript, and Tailwind CSS</p> */}

        
                    <ul className='w-[40%] flex flex-row justify-between ml-auto'>
                        <Link to="/About"><li className='text-[18px] font-["Kameron"] hover:bg-[#C999BC] hover:cursor-pointer p-4 w-30 text-center'>About</li> </Link>
                        <Link to="/Projects"><li className='text-[18px] font-["Kameron"] hover:bg-[#C999BC] hover:cursor-pointer p-4 w-30 text-center'>Projects</li></Link>
                        <Link to="/Contact"><li className='text-[18px] font-["Kameron"] hover:bg-[#C999BC] hover:cursor-pointer p-4 w-30 text-center'>Contact</li></Link>
                    </ul>
            </div>
            
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;