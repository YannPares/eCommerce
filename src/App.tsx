import {RoutesPath} from './Routes/RoutesPath.routes'
import { Cart } from './components/cart/Cart'
import { CartProvider } from './context/cart'

function App() {
 return(
   <>
    <CartProvider>
    <RoutesPath />
    </CartProvider>
   </>
 )
}

export default App
