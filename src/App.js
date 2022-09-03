import { Fragment, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { publicRoutes, authRoutes } from '~/routes';
import DefaultLayout, { HeaderOnly } from '~/layouts';
import { scrollToPosition } from '~/utils';
import config from './config';

function App() {
  let location = useLocation();
  useEffect(() => {
    scrollToPosition(0);
  }, [location.pathname]);

  return (
    <div className="App">
      <>
        <Routes>
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
              />
            );
          })}
          {authRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = HeaderOnly;

            // Login rồi không vào trang Login, Sign Up, Forget Password được nữa
            const isLoggedIn = Boolean(localStorage.getItem('access_token'));

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isLoggedIn ? (
                    <Navigate to={config.routes.home} replace={true} />
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}
        </Routes>
      </>
    </div>
  );
}

export default App;
