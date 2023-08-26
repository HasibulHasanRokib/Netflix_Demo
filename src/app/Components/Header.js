import Image from "next/image"
import Logo from '/public/Netflix_2015_logo.svg.png'
import {FiSearch,FiBell} from 'react-icons/fi'
import Avatar from '/public/Netflix-avatar.png'
import Link from "next/link"

const Header = () => {

  return (
    <>
    <header>
      <Image src={Logo} width={120} height={100} alt="logo"/>
      <div>
        <ul className="flex md:gap-8 gap-3 items-center">
          <li><FiSearch size={25}/></li>
          <li><FiBell size={25}/></li>
          <li><Link href={'/signin'}><Image className="rounded "  src={Avatar} alt="avatar" width={30} height={50}/></Link></li>
        </ul>
      </div>
    </header>
    </>
  )
}

export default Header
