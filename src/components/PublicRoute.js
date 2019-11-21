import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        component={props =>
          isAuthenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.id
});
export default connect(mapStateToProps)(PublicRoute);
