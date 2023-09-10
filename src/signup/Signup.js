import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

//styles
import styles from './Signup.module.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ displayName, setDisplayName ]  = useState('')
  const { signup} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }
  


  
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Cadastro</h2>
      <label>
        <span>email:</span>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                >
            </input> 
    
      </label>
      <label>
        <span>Senha:</span>
        <input 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              >
        </input> 
      </label>
      <label>
      <span>Nome de usuário:</span>
      <input 
            type="Nome"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            >
      </input> 
    </label>
    <button className="btn">Sign up</button>
    </form>
  )
}
