import React, {useState, useEffect} from 'react';
import style from './index.module.css';
import {useTracked} from 'react-tracked';
import {setAvailableTime, getSchedule} from '../../state/actions';
import Header from './Header';
import ProductList from './ProductList';
import Promo from './Promo';
import PromoButton from './PromoButton';
import css from './index.module.css';

function Main() {
  const [state, dispatch] = useTracked();

  const timeRangeHandler = (e) => {

    console.log(e.target.value);
  }
  return (
   <div className={css.mainPage}>
    <Header />
    <Promo />
    <h3>The Trendy Products</h3>
    <div className={css.promoButtonContainer}>
      <PromoButton label="куртки" />
      <PromoButton label="платья" />
      <PromoButton label="зимняя коллекция" />
      <PromoButton label="2019" />
    </div>
    <ProductList />
    <h3>Contacts</h3>
    <PromoButton label="w/t +7 906 792 23 70" />
    <PromoButton label="доп +7 903 621 58 33" />
  </div>
  );
}

export default Main;


