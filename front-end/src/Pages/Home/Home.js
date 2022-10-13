import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';
import genericReq from "../../Utils/Reqs";
import Header from "../../Components/Header/Header";
import { saveItem } from "../../Utils/LocalStorage";

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const bringProducts = async () => {
      const newProducts = await genericReq('GET', 'products')

      setProducts(newProducts.data)
    }

    bringProducts();
  }, [])

  return(
    <div className={styles.homePage}>
      <Header />
      <main>
        {products.map((item) => (
          <Card style={{ width: '18rem' }} key={item.id} className={styles.productCard}>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text>R${item.price.toFixed(2)}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => saveItem(item)}
              >
                Adicionar ao carrinho
              </Button>
            </Card.Body>
          </Card>
        ))}
      </main>
      <button 
        type="button"
        className={styles.cartButton}
      >
        <img 
          src="https://img.icons8.com/material-outlined/344/shopping-cart--v1.png" 
          alt="cart icon"
          className={styles.cartIcon}
        />
      </button>
    </div>
  )
}