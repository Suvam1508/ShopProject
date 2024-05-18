import Header from './components/Header'
import Products from './components/Products'
import CartProvider from './contexts/CartProvider'
import './index.css'


function App() {
  return (
    <div>
    <CartProvider>
    <Header/>
    <Products/>
    </CartProvider>
    </div>
  )
}

export default App







