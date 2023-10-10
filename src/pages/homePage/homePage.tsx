import { BiSolidRegistered } from 'react-icons/bi'
import './homePageStyle.css'
import { Link } from 'react-router-dom'


export const HomePage = () => {
  return (
    
    <>
      <main className=' mt-28' id='main'>
        <div className='rounded-xl mt-6 mb-2 grid grid-rows-1 grid-cols-2 bg-opacity-70 bg-black  '>
          <section className='col-start-1 '>
            <img className=' rounded-full opacity-70 pt-16 z-0' src="https://i.gyazo.com/014cd1d664dcb232912ccd33354ee284.png" alt="logo" />
          </section>
          <article className='py-24 pr-8 col-start-2 text-sm text-white'>
            <h4 className=' text-5xl'>Welcome to Band Fan<BiSolidRegistered /></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates asperiores repellat obcaecati ducimus ex architecto,
              porro expedita in magnam culpa nobis illo. Earum sit optio voluptatibus distinctio nihil architecto ad!</p>
          </article>
        </div>
        <Link to="/merch"> <button className='rounded-xl mt-6 mb-2 grid grid-rows-1 grid-cols-2 bg-opacity-70 bg-black  '>
          <section className='col-start-1 '>
            <img className='rounded-xl' src="https://i.gyazo.com/fc9c21bc10c4f102e877ac1be9097e96.png" alt="gothgirl" />
          </section>
          <article className='pt-40 col-start-2 text-sm text-white'>
            <h4 className=' text-5xl'>Band Merch</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates asperiores repellat obcaecati ducimus ex architecto,
              porro expedita in magnam culpa nobis illo. Earum sit optio voluptatibus distinctio nihil architecto ad!</p>
          </article> 
        </button>
        </Link>
        <Link to="/vinyls"><button className='w-full rounded-xl mt-6 mb-2  bg-opacity-70 bg-black bg-image-CD '>
          <article className=' p-48 text-sm text-white'>
            <h4 className=' text-5xl'>Vinyls&CD</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates asperiores repellat obcaecati ducimus ex architecto,
              porro expedita in magnam culpa nobis illo. Earum sit optio voluptatibus distinctio nihil architecto ad!</p>
          </article>
        </button></Link>
        <Link to="/extras"><button className='rounded-xl mt-6 mb-2 grid grid-rows-1 grid-cols-2 bg-opacity-70 bg-black  '>
          <section className='col-start-1 '>
            <img className=' ' src="https://i.gyazo.com/cb80e55fc8662d6cddc864558075204e.png" alt="extras" />
          </section>
          <article className='  col-start-2 text-sm text-white'>
            <h4 className='pt-16 text-5xl'>Extras</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates asperiores repellat obcaecati ducimus ex architecto,
              porro expedita in magnam culpa nobis illo. Earum sit optio voluptatibus distinctio nihil architecto ad!</p>
            <img className='pt-8' src="https://i.gyazo.com/4a535fb4bad006c0099a02f0fb558a34.png" alt="mugs" />
          </article>
        </button></Link>
        <div id='aboutSection' className='rounded-xl mt-6 mb-2 grid grid-rows-1 grid-cols-2 bg-opacity-70 bg-black  bg-about  '>
          <article className='col-start-1 text-sm text-white'>
            <h4 className='pt-8 text-5xl'>About Us</h4>
            <p>eCommerce fully dedicated to sell band items, like clothes, accesories or music... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis cupiditate facilis at, praesentium reprehenderit</p>
          </article>
          <article className='  col-start-2'>
            <img className='rounded-xl' src="https://i.gyazo.com/9678806b940e0fae50e6ca4f0be791b9.png" alt="logo" />
          </article>
        </div>
      </main>
    </>
  )
}