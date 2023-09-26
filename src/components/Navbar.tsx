

const Navbar = () => {
    return (
        <nav className="grid grid-rows grid-flow-col col-6 bg-slate-500 bg-opacity-70 shadow-2xl rounded-b">
            <button className="logoIMG">
                <img src="src\assets\1bb0850450376bbfd331a76515297bef (1).png" alt="loading... LOGO" />
            </button>
            <button className="grid-flow-row">Merchandising</button>
            <button className='grid-flow-row'>Vinils&CD</button>
            <button className='grid-flow-row'>Accesories</button>
            <button className='grid-flow-row'>Contact</button>
            <button className='grid-flow-row'>About</button>
            <button> <img className='grid-flow-row rounded-xl' src='https://i.fbcd.co/products/original/667ca7502e4e218f01e4fbb26e01e2fc7fe17370f64bf444f60818b9d1b2c2b2.jpg'
                alt='loading...CART' width={70}></img>
            </button>
        </nav>
    )
}

export default Navbar