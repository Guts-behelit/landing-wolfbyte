
import './App.css'
import Front from './components/Front'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import WolfByteInfo from './components/WolfByteInfo'

function App() {
  

  return (
    <>
      <Header/>
      <Front/>
      <About>
<WolfByteInfo/>
      </About>
      <Footer/>
    </>
  )
}

export default App
