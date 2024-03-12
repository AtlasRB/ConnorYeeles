import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './Components/NotFoundPage'
import HomePage from './Components/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>

        <nav>
            
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

      </BrowserRouter>

      
    </>
  )
}

export default App