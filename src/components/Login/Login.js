import React from 'react';
import TwitterLogin from 'react-twitter-auth';

import { Layout } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends React.Component {
  authLogin = id => {
    this.props.authLogin(id);
  };

  onSuccess = response => {
    response.json().then(body => {
      console.log(body.id);
      this.props.authLogin(body.id);
    });
  };

  onFailed = error => {
    console.log(error);
  };

  render() {
    const { Content } = Layout;

    return (
      <Content>
        <div className="twitter">
          <div className="box-layout__box">
            <h1 className="box-layout__title">Tweet</h1>
            <p>It's time to get your expenses under control.</p>
            <TwitterLogin
              loginUrl="/auth/twitter"
              onFailure={this.onFailed}
              onSuccess={this.onSuccess}
              requestTokenUrl="/auth/twitter/reverse"
              forceLogin={true}
            />
          </div>
        </div>
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authLogin: id => dispatch(login(id))
});

export default connect(null, mapDispatchToProps)(Login);
