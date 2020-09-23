import React from 'react'
import LogoFile from '../../img/logo.svg'
import Logo from './ImageItem'
export default function BrandLogo(props) {
  return (
    <Logo src={LogoFile} {...props}/>
  )
}
