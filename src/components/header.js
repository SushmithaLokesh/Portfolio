import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header()
{
    const [Menu,setMenu] = useState(false)

        function handleMenu()
        {
            setMenu(!Menu)
        }

    return(
    <nav className="flex justify-between p-5 bg-blue-950 text-white">
        <h1 className="font-bold text-3xl">Sushmitha Raja</h1>
        <div className="hidden md:block">
        <ul className="flex gap-5 pr-5 text-2xl">
            <li className="hover:underline"><a href="#home">Home</a></li>
            <li className="hover:underline"><a href="#about">About</a></li>
            <li className="hover:underline"><a href="#project">Projects</a></li>
            <li className="hover:underline"><a href="#resume">Resume</a></li>
            <li className="hover:underline"><a href="#contact">Contact</a></li>
        </ul>
        </div>
        <button onClick={handleMenu} className='block md:hidden'><Bars3Icon className='text-white h-8'></Bars3Icon></button>
        {Menu && <div className="block md:hidden top-20 left-0 fixed bg-slate-900 w-full h-fit text-center">
        <ul onClick={() => setMenu(!Menu)} className="flex flex-col text-2xl">
            <li className="border-b-2"><a href="#home">Home</a></li>
            <li className="border-b-2"><a href="#about">About</a></li>
            <li className="border-b-2"><a href="#project">Projects</a></li>
            <li className="border-b-2"><a href="#resume">Resume</a></li>
            <li className="border-b-2"><a href="#contact">Contact</a></li>
        </ul>
        </div>}
    </nav>)
}

export default Header