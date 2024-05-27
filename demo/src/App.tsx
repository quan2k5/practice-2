import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import AdminPage from './components/Admin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login></Login>
      <AdminPage></AdminPage>
    </div>
  )
}

export default App
