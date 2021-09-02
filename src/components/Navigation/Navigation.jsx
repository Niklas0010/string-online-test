import React from 'react'
import Style from './navigation.module.scss'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Images/header-bg.png'

export default function Navigation() {
  return (
    <>
      <nav className={Style.nav_container}>
        <img src={Logo} alt="" />
        <ul className={Style.nav_ul}>
          <li>
            <Link to="/">Forside</Link>
          </li>
          <li>
            <Link to="/">Salgs- og handelsbetingelser</Link>
          </li>
          <button className={Style.login_btn}>
            <Link>Login</Link>
          </button>
        </ul>
        <form className={Style.form_container}>
          <input className={Style.form_input} type="text"></input>
        </form>
      </nav>



    </>
  )
}
