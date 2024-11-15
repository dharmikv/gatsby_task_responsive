import React, { useEffect, useState } from 'react'
import {MENU_ICON} from '../images/index'
import Sidebar from './Sidebar'
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isSidebarOpen])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <>
       <div className="container-fluid bg-black/60">
        <nav className='flex justify-between md:py-6 py-4'>
            <div className='nav-logo'>
                <a href="#">LOGO</a>
            </div>
            <ul className='hidden lg:flex'>
                <li className='nav-link'><a href="#">Home</a></li>
                <li className='nav-link'><a href="#">about</a></li>
                <li className='nav-link'><a href="#">blog</a></li>
                <li className='nav-link'><a href="#">contact</a></li>
            </ul>
            <div>
                <button onClick={() => setIsSidebarOpen(true)}>
                                <img src={MENU_ICON} alt="Menu" className="w-5 h-5" />
                </button>
            </div>
            </nav>
       </div>
       <Sidebar/>
       <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={closeSidebar}
                ></div>
        )}
    </>
  )
}

export default Header