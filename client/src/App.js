import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { publicRoutes } from './routes';
import DefaultLayout from './components/DefaultLayout';
function App() {
      const { user: currentUser } = useContext(AuthContext);

      return (
            <>
                  <div className="App">
                        <Router>
                              <Routes>
                                    {/* <Route
                                          exact
                                          path="/"
                                          element={currentUser ? <Home /> : <Login />}
                                    ></Route>

                                    <Route path="/products/:id" element={<SingleProduct />}></Route>
                                    <Route path="/cart/" element={<Cart />}></Route>
                                    <Route path="/cart/:id" element={<Cart />}></Route>
                                    <Route path="/user/profile" element={<Profile />}></Route> */}

                                    {publicRoutes.map((route, index) => {
                                          const Page = route.component;
                                          let Layout = DefaultLayout;
                                          if (route.layout) {
                                                Layout = route.layout;
                                          } else if (route.layout === null) {
                                                Layout = Fragment;
                                          }
                                          return (
                                                <Route
                                                      key={index}
                                                      path={route.path}
                                                      element={
                                                            <Layout>
                                                                  <Page />
                                                            </Layout>
                                                      }
                                                ></Route>
                                          );
                                    })}
                              </Routes>
                        </Router>
                  </div>
            </>
      );
}

export default App;
