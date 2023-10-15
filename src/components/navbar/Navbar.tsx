import { BiUser } from 'react-icons/bi'
import { TbShoppingCart } from 'react-icons/tb'
import  "./navbar.styles.css" 
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Cart } from '../cart/Cart'




const Navbar = () => {

    const [openModal, setOpenModal] = useState(false)
    
    return (
        <nav className='navbar z-50'>
            <ul id='items'
            className="navItems top-0 w-full fixed flex justify-between align-middle gap-1 sm:gap-2 md:gap-4 lg:gap-8 py-8 px-4 bg-slate-500 opacity-95 text-cyan-50 rounded-b-xl">
                <a href='#main'><Link to="/"><li className=' '>Home</li></Link></a>
                <Link to="/merch"> <li className=' '>Merch</li></Link>
                <Link to="/vinyls"> <li className=' '>Vinyls&CD</li></Link>
                <Link to="/extras"> <li className=' '>Extras</li></Link>
                <Link to="/" onClick={()=>{window.location.href = '#aboutSection'}}> <li className=' '>About</li></Link>

                {/* <a href='#'><li  className=' '>About</li></a> */}
                <li className=" ">
                    <input type="text"  placeholder="Search.."/>
                    {/* <button className='border'>Search</button> */}
                </li>
                <li className="">
                    <Link to="/loginPage"><button><BiUser /></button></Link>
                </li>
                <li>
                     <button className='transition-all' onClick={() => {
                        if (!openModal){setOpenModal(true)}
                        else setOpenModal(false)}}>
                        <TbShoppingCart/> 
                        {openModal && <Cart />}
                    </button>
                    
                </li>
            </ul>
            {/* <div className='navToggle' id='toggle' onClick={() => {
                const items = document.getElementById('items')
                items.className = 'close'
                const navToggle = document.getElementById('navToogle')
                navToggle.className = 'delete'

            }}>
                <span ></span> 
                <span ></span>
                <span ></span>
           
            </div> */}
            
        </nav>
        
    )
}

export default Navbar