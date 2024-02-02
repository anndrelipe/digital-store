import React from 'react'
import MainHeader from './MainHeader.jsx'
import NavBar from './NavBar.jsx'
import style from './CompleteHeader.module.css'

const CompleteHeader = () => {
    return (
        <div className={style.completeHeaderContainer}>
            <MainHeader />
            <NavBar />
        </div>
    )
}

export default CompleteHeader