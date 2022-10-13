import React from 'react';
import { Form, Button } from 'react-bootstrap'
import styles from './styles.module.css';

export default function Login() {
  return (
    <Form className={ styles.LoginDiv }>
      <Form.Control 
        type='email'
        placeholder='Insira o email'
        className={styles.inputEmail}
      />
      <Form.Control 
        type='password'
        className={styles.inputLogin}
        placeholder='Insira a senha'
      />
      <Button 
        variant='primary'
        type='button'
      >
        Log in
      </Button>
    </Form>
  )
}