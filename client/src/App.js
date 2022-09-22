import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SingleProduct from './components/Product/SingleProduct';
import { AuthContext } from './context/AuthProvider';
import Cart from './pages/cart/Cart';
import PreviewProduct from './components/Product/PreviewProduct';

function App() {
      const { user: currentUser } = useContext(AuthContext);

      return (
            <>
                  <div className="App">
                        <Router>
                              <Routes>
                                    <Route
                                          exact
                                          path="/"
                                          element={currentUser ? <Home /> : <Login />}
                                    ></Route>

                                    <Route path="/products/:id" element={<SingleProduct />}></Route>
                                    <Route path="/cart/:id" element={<Cart />}></Route>
                                    <Route path="/map" element={<PreviewProduct />}></Route>
                              </Routes>
                        </Router>
                  </div>
            </>
      );
}

export default App;
