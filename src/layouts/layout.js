import React from 'react'
import "./layout.scss"
import Navbar from '../components/Navbar/navbar'
import Images from '../components/Images/images'
import Sidenav from '../components/Sidenav/sidenav'

const Layout = () => {
  return (
    <div className='container'>
      <nav className='nav'><Navbar /></nav>
      <div className='sidebar'><Sidenav /></div>
      <div className='middle-container'>
        <main><Images /></main>
        <div className='content1'><Images /></div>
        <div className='content2'><Images /></div>
        <div className='content3'><Images /></div>
        <main><Images /></main>
        <div className='content1'><Images /></div>
        <div className='content2'><Images /></div>
        <div className='content3'><Images /></div>
        <div className='content2'><Images /></div>
        <div className='content3'><Images /></div>
      </div>
      <footer><Navbar /></footer>
    </div>
  )
}

export default Layout