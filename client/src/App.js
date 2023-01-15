import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { privateRoutes } from './routes';
import DefaultLayout from './components/DefaultLayout';
function App() {
      const Render = (Routes) => {
            return Routes.map((route, index) => {
                  let Page = route.component;
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
                        />
                  );
            });
      };

      return (
            <>
                  <div className="App">
                        <Router>
                              <Routes>{Render(privateRoutes)}</Routes>
                        </Router>
                  </div>
            </>
      );
}

export default App;
