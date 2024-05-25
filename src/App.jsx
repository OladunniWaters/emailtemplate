import { useState } from 'react'
import Form from './component/email/Form';
import './App.css'

function App() {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <>
     <div className="app" data-theme={theme}>
      <Form />
     </div>  
    </>
  )
}

export default App
