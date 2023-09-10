import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

//styles
import styles from './Login.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPeding } = useLogin()



    const handleSubmit = (e) => {
        e.preventDefault( )
        login(email, password)
    }
  
  
    return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
            <input 
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                >
            </input> 
    
      </label>  
      <label>
        <span>Senha:</span>
        <input 
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              >
        </input> 
      </label>
      <button className='btn'>Login</button>
      {isPeding && <button className='btn' disabled>Carregando</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
