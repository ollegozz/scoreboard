import React from 'react'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.header__content}>
        <nav className={css.header__nav}>
          <div className={css.logo}>Vb</div>
          <div className={css.menu_list}>123123123123</div>
          <div className={css.menu_drop}>X</div>
        </nav>
      </div>
    </div>
  )
}

export default Header