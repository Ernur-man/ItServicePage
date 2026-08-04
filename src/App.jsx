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
        <Route path='/mixProject' element={<HomePage/>}/>
        <Route path='/mixProject/about' element={<AboutPage/>}/>
        <Route path='/mixProject/services' element={<ServicesPage/>}/>
        <Route path='/mixProject/blog' element={<BlogPage/>}/>
        <Route path='/mixProject/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}


export default App
