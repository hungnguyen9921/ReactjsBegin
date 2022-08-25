import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Header from './components/Navbar/Header';
import { AuthContext } from './context/AuthProvider';

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
                              </Routes>
                        </Router>
                  </div>
            </>
      );
}

export default App;
