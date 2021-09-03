import React from 'react'
import { ProductNav } from '../../Productnav/Subnav'
import Style from './frontpage.module.scss'
import Hero_banner from '../../../Assets/images/hero-banner.png'
import { Favoritter } from '../../Favoritter/Favoritter'

export default function Frontpage() {
  return (
    <>
      <img className={Style.Hero_banner} src={Hero_banner} alt="" />
      <ProductNav />
      <Favoritter />
    </>
  )
}
