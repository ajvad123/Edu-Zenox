import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/about';
import './assets/css/main.css';
import Course from './Components/Course';
import Contact from './Components/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>

      <Header />

  
      <Hero />
      <About />
      <Course />
      <Contact />
    


      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
