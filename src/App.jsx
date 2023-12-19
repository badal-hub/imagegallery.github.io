import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/reusable/AppName/AppName'
import SearchComponent from './components/global/SearchComponent/SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <AppName/>
    <SearchComponent/>
    </div>
  )
}

export default App
