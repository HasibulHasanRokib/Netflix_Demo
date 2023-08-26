'use client'

import Image from "next/image"
import BgSignIn from "/public/bg-signIn.jpg"
import Logo from "/public/Netflix_logo.svg"
import Link from "next/link"
import { useRouter } from "next/navigation"

const SignIn = () => {

   const router=useRouter()

  return (
    <>
    <section className="w-full h-[100vh] relative">
    <nav className="fixed z-10 md:p-[3rem] p-4">    
   <Image className="w-[10rem]" src={Logo} alt="Logo" width={200} height={200}/>
    </nav>
    <div className="w-full h-[100vh] bg-gradient-to-r from-black absolute"></div>
    <Image src={BgSignIn} className="w-[100%] h-[100%]" alt="bg" width={1024} height={500}/>
    
    <section className="md:w-[30rem] h-[65%] md:h-[85%] bg-black/60 absolute md:bottom-0 bottom-[5rem] md:left-[10rem] lg:left-[30rem] rounded-md">
     <form className="md:p-[4rem] p-4">
     <h1 className="text-3xl font-bold py-2">Sign In</h1>
     <div className="py-4">
        <input className="block py-3 px-2 w-full my-2 rounded outline-none bg-[#333]" type="email" placeholder="Email or phone number"  required/>
        <input className="block py-3 px-2 w-full my-3 rounded outline-none bg-[#333]" type="password" placeholder="Password" required/>    
        <button type="button" onClick={()=>{router.push('/home')}} className="block bg-[#e50914] w-full py-3 rounded-md mt-8 font-bold text-center">Sign In</button>
        <div className="mt-2 flex justify-between">
           <p className="text-gray-400"><input className="accent-red-500" type="checkbox"/> Remember me</p>
            <p className="text-gray-400">Need help?</p>
        </div>
     </div>
     <div>
        <h5 className="text-gray-400 my-4">New to Netflix? <a href="#" className="font-semibold text-white">Sign up now.</a></h5>
        <p className="text-gray-400 text-xs">This page is protected by Google reCAPTCHA to ensure you`re not a bot. <a href="#" className="font-bold text-blue-700">Learn more.</a></p>
     </div>
     </form>
    </section>
    </section>
    </>
  )
}

export default SignIn
