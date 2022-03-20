import './App.css';
import Navbar from './components/Homepages/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Homepages/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import BestProduct from './components/Homepages/BestProduct/BestProduct';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';
import DashBoard from './components/pages/DashBoard/DashBoard';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
         
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/shop">
                <Shop />
              </Route>
              <Route exact path="/products">
                <BestProduct/>
              </Route>
              <Route exact path="/products/:id">
                <ProductDetails />
              </Route>
              <Route path="/dashBoard">
                <DashBoard />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
