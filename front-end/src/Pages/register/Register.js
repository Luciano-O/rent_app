import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { saveLocalStorage } from '../../Utils/LocalStorage';
import genericReq from '../../Utils/Reqs';
import styles from './styles.module.css';

export default function Register() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleClick = async () => {
    const user = await genericReq('POST', 'users', {email, name, password})

    if(user.data.message) return setError(user.data.message)

    saveLocalStorage('user', user.data);

    return history.push('/')
  }

  useEffect(() => {
    const checkValidate = () => {
      setError('')
      const regex = /\S+@\S+\.\S+/;
      if(regex.test(email) && password.length > 4 && name.length > 4) {
        setDisabled(false)
      } else setDisabled(true)
    }
    checkValidate();
  }, [password, email, name])

  return (
    <Form className={ styles.registerDiv }>
      {error && error}
      <Form.Control
        placeholder="Insira seu nome"
        className={styles.inputDisplayName}
        type="text"
        value={ name }
        onChange={({target}) => setName(target.value)}
      />
      <Form.Control
        placeholder="Insira seu email"
        type="email"
        className={styles.inputRegister}
        value={ email }
        onChange={({target}) => setEmail(target.value)}
      />
      <Form.Control
        placeholder="Insira sua senha"
        type="password"
        value={ password }
        onChange={({target}) => setPassword(target.value)}
      />
      <Button
        variant="primary"
        disabled={ disabled }
        onClick={ handleClick }
        type="button"
      >
        Registre-se
      </Button>
      <span>Já possui uma conta? <Link to="/login">Log in</Link></span>
    </Form>
  )
}