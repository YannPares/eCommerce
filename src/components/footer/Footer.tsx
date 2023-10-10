// import { BiSolidRegistered } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
export const Footer = () => {
  return (
    <footer className=' justify-center h-20 grid grid-rows-2 grid-flow-col col-6 bg-slate-500 opacity-95 text-cyan-50 rounded-t-xl  shadow-2xl'>
    <h6 className=''>Copyright 2023 </h6>
    <span className='flex gap-8'><BsFacebook/> <BsTwitter/> <BsInstagram/> </span>
  </footer>
  )
}