import React, { useEffect, useState } from "react";
import propTypes from 'prop-types';
import { Button } from 'react-bootstrap'
import styles from './styles.module.css';
import genericReq from "../../Utils/Reqs";
import Header from "../../Components/Header/Header";
import { saveItem } from "../../Utils/LocalStorage";

export default function ProductDetails({match}) {
  const { id } = match.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const bringProduct = async () => {
      const newProduct = await genericReq('GET', `products/${id}`)

      setProduct(newProduct.data)
    }
    bringProduct();
  }, [])

  return (
    <>
      <Header />
      <main className={styles.product}>
        <img 
          src={product.image}
          alt={product.name}
        />
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>R${Number(product.price).toFixed(2)}</p>
        <Button 
          variant="primary"
          onClick={() => saveItem(product)}
          className={styles.addButton}
        >
          Adicionar ao carrinho
        </Button>
      </main>
    </>
  )
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired
}