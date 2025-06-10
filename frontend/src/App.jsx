import { useEffect, useState } from 'react'
import Display from './components/display';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({ username: '', email: '' })


  
  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    console.log(res,"efsdfasfasfas");
    
    
    if(res.status===201){
      const newUser = await res.json()
    setUsers([...users, newUser])
    setForm({ username: '', email: '' })

    }
    
    
  }
  const handleDelete = async(id)=>{
    const res = await axios.delete(`${API_URL}/users/${id}`);
    console.log(res,"dsgsdgsdgds");
    
     if (res.status===200) {
      setUsers(prev => prev.filter(user => user._id !== id));
      alert("User deleted successfully.");
    } else {
      alert("Failed to delete user.");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <Display handleDelete={handleDelete} users={users}/>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default App
