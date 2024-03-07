import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
import Meals from './Components/Meal/Meals';
import { CartContextProvider } from './store/CartContext';
import {UserProgressContextProvider} from './store/UserProgressContext';
import Cart from './Components/Ui/Cart';
import Checkout from './Components/Ui/Checkout';
function App() {

  return (
    <div className="App">
      <UserProgressContextProvider>
        <CartContextProvider>
          <Hero />
          <Plans />
          <Programs />
          <Reasons />
          <Testimonials />
          <Meals />
          <Cart/>
          <Checkout/>
          <Join />
          <Footer />
        </CartContextProvider>
      </UserProgressContextProvider>
    </div>
  );
}

export default App;
