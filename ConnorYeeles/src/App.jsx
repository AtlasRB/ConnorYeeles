import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './Components/NotFoundPage'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'

function App() {

  return (
    <>
        
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} /> 
                <Route path='/contact' element={<ContactPage />} /> 
                <Route path='*' element={<NotFound />} />
            </Routes>

        </BrowserRouter>

      
    </>
  )
}

export default App