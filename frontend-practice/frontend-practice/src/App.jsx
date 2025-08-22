import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
const[formData, setFormData] = useState({name:"", email:""});
  
const handleInput = (e) =>{
  setFormData({...formData, [e.target.name] : e.target.value});
  
}
  return (
    <>
    <form>
      <input name='name' value={formData.name} onChange={handleInput}></input>
      <input name='email' type='email' value={formData.email} onChange={handleInput}></input>
      <button type='submit'> submit</button>
    </form>
    <p>name: {formData.name}</p>
    <p>email: {formData.email}</p>
    </>
  )
}

export default App
