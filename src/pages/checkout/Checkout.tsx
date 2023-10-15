

const Checkout = () => {
  return (<>
    <div className='m-20 sm:m-32'>Checkout
    <ul className=''>s
      <li className='text-center w-full h-52 bg-white mb-10'>Product</li>
      <li className='text-center w-full h-52 bg-white mb-10'>Product</li>
      <li className='text-center w-full h-52 bg-white mb-10'>Product</li>
      <li className='text-center w-full h-52 bg-white mb-10'>Product</li>
    </ul>
      <button className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Confirm Purchase</button>
      <button onClick={()=>{history.back()}} className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Continue Shopping</button>
</div>
  </>)
}


export default Checkout