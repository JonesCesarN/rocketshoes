import Bag from '@/assets/icon-bag.svg'
import Logo from '@/assets/logo.svg'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Input } from 'semantic-ui-react'

export const Nav = () => {
  const [isMobile, setIsMobile] = useState(false)

  function handleMenu() {
    if (isMobile) setIsMobile(false)
    else setIsMobile(true)

  }

  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={Logo} alt="logo" />

      <ul className='navbar__nav '>
        <a href='#'>homem</a>
        <a href='#'>mulher</a>
        <a href='#'>criança</a>
        <a href='#'>customizar</a>
      </ul>

      <div className='navbar__search '>
        <Input icon='search' iconPosition='left' placeholder='pesquisar...' />
        <img src={Bag} alt="bag-icon" />
      </div>
    </nav>
  )
}
