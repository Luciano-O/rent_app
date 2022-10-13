import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from './styles.module.css';
import { getLocalStorage } from "../../Utils/LocalStorage";
import Header from "../../Components/Header/Header";
import genericReq from "../../Utils/Reqs";

export default function Cart() {
  const history = useHistory();
  const [cart, setCart] = useState([{}])
  const [userId, setUserId] = useState()
  const [user, setUser] = useState()
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    const bringProducts = () => {
      const products = getLocalStorage('cart')

      setCart(products)
    }
    const bringUser = () => {
      const newUser = getLocalStorage('user')

      setUser(newUser)
    }
    bringUser();
    bringProducts();
  }, [])

  useEffect(() => {
    const setDisable = () => {
      if(cart && userId) setDisabled(false)
    }
    setDisable();
  }, [userId])

  const handleClick = async () => {
    cart.forEach(async (item) => {
      await genericReq('POST', 'rent', {userId: user.id, productId: item.id, months: 12}, user.token)
    })

    history.push('/')
  }

  return(
    <main className={styles.cartMain}>
      <Header />
      <div className={styles.cards}>
        {cart.map((item) => <ProductCard name={item.name} price={item.price} image={item.image} />)}
      </div>
      <h5>Envie um documento de identificação abaixo</h5>
      <input 
        type="file"
        value={userId}
        onChange={({target}) => setUserId(target.value)}
      />
      <button
        disabled={disabled}
        type='button'
        onClick={handleClick}
      >
        Realizar pedido
      </button>
    </main>
  )
}