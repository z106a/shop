import React from 'react';
import Card from './Card'
import css from './index.module.css';

const cards = [1, 2, 3, 4, 5, 6];

function ProductList() {
  const createCard = (item) => {
    return <Card item={item} />
  }

  return (
    <div className={css.productList}>
      {cards.map(createCard)}
    </div>
  );
}

export default ProductList;