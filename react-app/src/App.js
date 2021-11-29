import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import CreateProductForm from './components/CreateProductForm';
import AllProducts from './components/AllProductsPage/AllProducts';
import SingleProduct from './components/AllProductsPage/SingleProduct';
import OneProductPage from './components/OneProductPage';
import CreateReviewForm from './components/CreateReviewForm';
import Search from './components/Search';
import LandingPage from './components/LandingPage/LandingPage';
import { useSelector } from 'react-redux';
import DirectMessage from './components/DirectMessage/DirectMessage';
import SearchResults from './components/Search/SearchResults';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser=useSelector(state=>state.session.user)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
       <ProtectedRoute path='/messages/sender/:senderId/receiver/:receiverId' exact={true}>
        <DirectMessage />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true}>
        <SearchResults />
        </ProtectedRoute>
        <ProtectedRoute path="/selling" exact={true}>
        <CreateProductForm />
        </ProtectedRoute>
        <Route path='/' exact={true}>
        {sessionUser ? (<AllProducts />):(<LandingPage />)}
        
        </Route>
        {/* <ProtectedRoute path="/products" exact={true}>
        </ProtectedRoute> */}
        <ProtectedRoute path='/products/:productId' exact={true} >
       
          <OneProductPage/>
        </ProtectedRoute>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
