import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { saveLocalStorage } from '../../Utils/LocalStorage';
import genericReq from '../../Utils/Reqs';
import styles from './styles.module.css';

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const checkValidate = () => {
      setError('')
      const regex = /\S+@\S+\.\S+/;
      if(regex.test(email) && password.length > 4) {
        setDisabled(false)
      } else setDisabled(true)
    }
    checkValidate();
  }, [password, email])

  const handleClick = async () => {
    const user = await genericReq('POST', 'login', {email, password});

    if(user.data.message) return setError(user.data.message)

    saveLocalStorage('user', user.data);

    return history.push('/')
  }

  return (
    <Form className={ styles.LoginDiv }>
      {error && error}
      <Form.Control 
        type='email'
        value={ email }
        placeholder='Insira o email'
        className={styles.inputEmail}
        onChange={({target}) => setEmail(target.value)}
      />
      <Form.Control 
        type='password'
        value={ password }
        className={styles.inputLogin}
        placeholder='Insira a senha'
        onChange={({target}) => setPassword(target.value)}
      />
      <Button 
        variant='primary'
        disabled={ disabled }
        type='button'
        onClick={ handleClick }
      >
        Log in
      </Button>
      <span>Don't have an account? <Link to="/register">Register</Link></span>
    </Form>
  )
}