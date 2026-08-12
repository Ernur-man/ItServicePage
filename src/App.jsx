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
        <Route path='/ItServicePage' element={<HomePage/>}/>
        <Route path='/ItServicePage/about' element={<AboutPage/>}/>
        <Route path='/ItServicePage/services' element={<ServicesPage/>}/>
        <Route path='/ItServicePage/blog' element={<BlogPage/>}/>
        <Route path='/ItServicePage/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}


export default App
