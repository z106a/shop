import React from 'react';
import css from './index.module.css';

function Header() {
  return (
    <div className={css.head}>
      <div className={css.label}>Angelic Boutigue</div>
      <span className={css.descr}>интернет магазин модной одежды</span>
    </div>
  )
}

export default Header;