import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CartProvider } from './context/cart.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <CartProvider>
        <App />
    </CartProvider>
    
  
)
