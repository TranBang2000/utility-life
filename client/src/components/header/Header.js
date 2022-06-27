import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h2 className="navbar-brand text-uppercase p-0 m-0" style={{color:'#57a'}}
                    onClick={() => window.scrollTo({top: 0})}>
                         𝐇𝐀𝐔𝐈 𝐒𝐎𝐂𝐈𝐀𝐋 𝐍𝐄𝐓𝐖𝐎𝐑𝐊
                    </h2>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
