import React, { lazy, Suspense } from 'react';

import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import LoadingPage from 'pages/LoadingPage';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';

const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const LazyRegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);
const LazyContactsPage = lazy(() =>
  import('../pages/ContactsPage/ContactsPage')
);

import {
  selectIsLoadingAuth,
  selectErrorAuth,
} from '../redux/auth/selectorsAuth';
import Loading from './common/Loading';
import Alert from './common/Alert';

export const App = () => {
  const loading = useSelector(selectIsLoadingAuth);
  const error = useSelector(selectErrorAuth);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        width: '100%',
      }}
    >
      <Sidebar />
      <main>
        {loading && <Loading />}
        {error && <Alert message={error} />}
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LazyLoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LazyRegisterPage />}
                />
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyContactsPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<LazyContactsPage />}
                />
              }
            />

            <Route path="*" element={<NotFoundPage initPage="contacts" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
