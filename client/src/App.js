import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SingleProduct from './components/Product/SingleProduct';
import { AuthContext } from './context/AuthProvider';
import Cart from './pages/cart/Cart';

function App() {
      const { user: currentUser } = useContext(AuthContext);
      console.log(currentUser);

      return (
            <>
                  <div className="App">
                        <Router>
                              <Routes>
                                    {/* <Route exact path="/"element={currentUser ? <Home/> : <Login/>}> </Route> */}
                                    <Route exact path="/" element={<Login />}></Route>
                                    <Route exact path="/home" element={<Home />}></Route>
                                    <Route path="/products/:id" element={<SingleProduct />}></Route>
                                    <Route path="/cart" element={<Cart />}></Route>
                              </Routes>
                        </Router>
                  </div>
            </>
      );
}

export default App;
