import React, { useEffect, useState } from "react";
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import styles from './styles.module.css';
import genericReq from "../../Utils/Reqs";
import Header from "../../Components/Header/Header";
import { saveItem } from "../../Utils/LocalStorage";

export default function Home() {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [displayProducts, setDisplayProducts] = useState([])

  useEffect(() => {
    const bringProducts = async () => {
      const newProducts = await genericReq('GET', 'products')

      setProducts(newProducts.data)
      setDisplayProducts(newProducts.data)
    }

    bringProducts();
  }, [])

  useEffect(() => {
    const updateProducts = () => {
      const filtredProducts = products.filter((item) => item.name.includes(search))

      setDisplayProducts(filtredProducts)
    }

    const orderProducts = () => {
      if(order === 'name') {
        const orderedProducts = displayProducts.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setDisplayProducts(orderedProducts)
      } else {
        const orderedProducts = displayProducts.sort((a, b) => a.price - b.price)
        setDisplayProducts(orderedProducts)
      }
    }
    orderProducts();
    updateProducts();
  }, [search, order])

  return(
    <div className={styles.homePage}>
      <Header />
      <Form.Control
        type="text"
        placeholder="Busque por um produto"
        value={search}
        onChange={({target}) => setSearch(target.value)}
        style={{width: '40%', margin: '1rem auto'}}
      />
      <DropdownButton 
        id="dropdown-basic-button"
        title="Ordenar"
        className={styles.order}
      >
        <Dropdown.Item onClick={() => setOrder('Nome')}>Nome</Dropdown.Item>
        <Dropdown.Item onClick={() => setOrder('Preço')}>Preço</Dropdown.Item>
      </DropdownButton>
      <main>
        {displayProducts.map((item) => (
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
        onClick={() => history.push('/cart')}
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