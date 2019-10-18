import React from 'react';
import css from './index.module.css';
import img1 from '../../assets/product/1.png'
import cart from '../../assets/html/cart.png';

function Card({item}) {
  return (
    <div className={css.card}>
      <img src={img1} />
      <div className={css.descr}>
        <span>Название модели</span>
        <span>$ 57.00</span>
        <span>Переход на страницу с подробной инф</span>
      </div>
      <button className={css.addToCart}>
        <img src={cart} />
      </button>
    </div>
  );
}

export default Card;