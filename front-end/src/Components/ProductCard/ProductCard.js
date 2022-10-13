import React from "react";
import propTypes from 'prop-types';
import styles from './styles.module.css';

export default function ProductCard(props) {
  const {
    name,
    price,
    image
  } = props
  return (
    <div className={styles.cardDetail}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R${(Number(price)).toFixed(2)}</p>
    </div>
  )
}

ProductCard.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  image: propTypes.string.isRequired
}