import Image from "next/image"
import Logo from '/public/Netflix_2015_logo.svg.png'

const Navbar = () => {

  return (
    <>
     <nav className="flex justify-between absolute w-full h-[4rem] z-[100] md:px-[3rem] px-4 items-center">
        <div className="logo">
        <Image src={Logo} width={100} height={100} alt="logo"/>
        </div>
        <ul className="flex ">
            <li><button className="mx-2 py-2 px-3 text-white">Sign In</button></li>
            <li><button className="bg-red-500 mx-2 py-2 px-3 text-white rounded">Sign Up</button></li>
        </ul>
     </nav>      
    </>
  )
}

export default Navbar
