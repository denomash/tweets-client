import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const { Header } = Layout;

const TweetHeader = ({ logout }) => {
  return (
    <Header>
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" exact to="/dashboard">
            Tweet
          </Link>
          <button className="button button--link" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>
    </Header>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(TweetHeader);
