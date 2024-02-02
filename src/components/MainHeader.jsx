import React from 'react'
import Logo from './Logo.jsx'
import SearchBar from './SearchBar.jsx'
import Register from './Register.jsx'
import EnterBtn from './EnterBtn.jsx'
import BuyCar from './BuyCar.jsx'
import style from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <div className={style.headerMainChild}>
            <Logo />
            <SearchBar />
            <div className={style.headerOpt}>
                <Register />
                <EnterBtn />
            </div>
            <BuyCar />
        </div>
    )
}

export default MainHeader