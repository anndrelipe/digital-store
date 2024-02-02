import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <ul className={style.navBarList}>
                <li><a href="" className={style.navBarLink}>Home</a></li>
                <li><a href="" className={style.navBarLink}>Produtos</a></li>
                <li><a href="" className={style.navBarLink}>Categorias</a></li>
                <li><a href="" className={style.navBarLink}>Meus Pedidos</a></li>
            </ul>
        </div>
    )
}

export default NavBar