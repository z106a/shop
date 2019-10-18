import React from 'react';
import css from './index.module.css';

function PromoButton({label}) {
  return (
    <div className={css.promoButton}>
      {label}
    </div>
  );
}
export default PromoButton;
