import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicesPage from './pages/ServicesPage/ServicePage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}


export default App
