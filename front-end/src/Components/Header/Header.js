import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './styles.module.css';
import { getLocalStorage, saveLocalStorage } from "../../Utils/LocalStorage";

export default function Header() {
  const history = useHistory();
  const [user, setUser] = useState({})
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const bringUser = async () => {
      const newUser = getLocalStorage('user')

      setUser(newUser)

      if(newUser.name) setLogged(true)
      else setLogged(false)
    }
    bringUser();
  }, [])

  return (
    <header className={styles.header}>
      {logged 
      ? <Link to={`/usuario/${user.id}`}>{user.name}</Link>
      : <Button 
      size="sm" 
      variant="primary"
      onClick={() => history.push('/login')}
        >
        Log in
      </Button>}
      <h1>Aluguéis</h1>
      {
        logged
        ? <Button
          onClick={() => {saveLocalStorage('user', []); setLogged(false); setUser({})}}
          type='button'
        >
          Log out
        </Button>
        : <Link to='/register'>Registre-se</Link>
      }
    </header>
  )
}