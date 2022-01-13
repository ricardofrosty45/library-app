import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './layout/Home';
import Login from './layout/Login';
import SignUp from './layout/Signup';
import AdminHomeMenu from './layout/AdminHomeMenu';
import DeactivateUserAdmin from './layout/DeactivateUserAdmin';
import AdminRegisterBook from './layout/AdminRegisterBook';
import AdminGetAllUsers from './layout/GetAllUserAdmin';
import AllAdmin from './layout/GetAllAdmins';
import UserHomeMenu from './layout/UserHomeMenu';
import RentsBook from './layout/RentsBookUser';
import RentsBookAdmin from './layout/RentsBookAdmin';
import ReturnBook from './layout/ReturnBooksUser';
import AvaliableBooks from './layout/GetAllAvaliableBooks';
import ReturnBookAdmin from './layout/ReturnBookAdmin';
import AnonymousUser from './layout/AnonymousUserHome';
import { AuthProvider } from './auth/AuthContext';
import { PrivateRoute } from './auth/PrivateRoute';

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminHomeMenu} />
        <Route exact path="/admin/users" component={AdminGetAllUsers} />
        <Route exact path="/admin/users/inactivate" component={DeactivateUserAdmin} />
        <Route exact path="/admin/books" component={AvaliableBooks} />
        <Route exact path="/admin/book/register" component={AdminRegisterBook} />
        <Route exact path="/admin/all" component={AllAdmin} />

        <Route exact path="/admin/book/rent" component={RentsBookAdmin} />
        <Route exact path="/admin/book/return" component={ReturnBookAdmin} />

        <Route exact path="/user" component={UserHomeMenu} />
        <Route exact path="/user/books" component={AvaliableBooks} />
        <Route exact path="/user/book/rent" component={RentsBook} />
        <Route exact path="/user/book/return" component={ReturnBook} />

        <Route exact path="/books" component={AvaliableBooks} />
        <Route exact path="/anonymous" component={AnonymousUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
