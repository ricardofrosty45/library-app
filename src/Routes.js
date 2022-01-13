import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './layout/Home';
import Login from './layout/Login';
import SignUp from './layout/Signup';
import GetOneClient from './layout/GetOneClient';
import AdminHomeMenu from './layout/AdminHomeMenu';
import AdminHomeMenu from './layout/AdminHomeMenu';
import RegisterBookAdmin from './layout/AdminRegisterBook';
import RentsBook from './layout/RentsBookUser';
import ReturnBook from './layout/ReturnBooksUser';
import AvaliableBooks from './layout/GetAllAvaliableBooks';
import { AuthProvider } from './auth/AuthContext';
import { PrivateRoute } from './auth/PrivateRoute';

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminHomeMenu} />


        <Route exact path="/admin/users" component={AdminHomeMenu} />
        <Route exact path="/admin/users/inactivate" component={AdminHomeMenu} />
        <Route exact path="/admin/books" component={AvaliableBooks} />




        <Route exact path="/admin/book/register" component={RegisterBookAdmin} />





        <Route exact path="/admin/book/rent" component={RentsBook} />
        <Route exact path="/admin/book/return" component={AdminHomeMenu} />

        <Route exact path="/user" component={UserHomeMenu} />
        <Route exact path="/user/books" component={AvaliableBooks} />
        <Route exact path="/user/book/rent" component={RentsBook} />
        <Route exact path="/user/book/return" component={ReturnBook} />


        <Route exact path="/anonymous" component={AdminHomeMenu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/v1/get-one-user" component={GetOneClient} />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
