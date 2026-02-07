import { useEffect } from 'react'
import './style.css'
import Trash from '../../assents/trash.svg'
import api from '../../services/api'

function Home() {
  let users = []

 async function getUsers () {
    users =   await api.get('/usuarios')
  }
   
  useEffect(() => {
   getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder='Nome' />
        <input type="number" placeholder='Idade' />
        <input type="email" placeholder='Email' />
        <button type='submit'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='cardi'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Excluir" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home

