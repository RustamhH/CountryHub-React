import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage/MainPage'

function App() {

  return (
    <div>        
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Header/>
      </header>
      
      <main>
        <MainPage></MainPage>
      </main>
      
      <footer>
        <Footer/>
      </footer>
    
    </div>
  )
}

export default App
