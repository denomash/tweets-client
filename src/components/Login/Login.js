import React from 'react';
import TwitterLogin from 'react-twitter-auth';

import { Layout } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends React.Component {
  authLogin = id => {
    console.log(this.props);

    this.props.authLogin(id);
  };

  onSuccess = response => {
    response.json().then(body => {
      this.props.authLogin(body.id);
    });
  };

  onFailed = error => {
    console.log(error);

    alert(error);
  };

  render() {
    const { Content } = Layout;

    return (
      <Content>
        <TwitterLogin
          loginUrl="http://localhost:8080/auth/twitter"
          onFailure={this.onFailed}
          onSuccess={this.onSuccess}
          requestTokenUrl="http://localhost:8080/auth/twitter/reverse"
          forceLogin={true}
        />
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authLogin: id => dispatch(login(id))
});

export default connect(null, mapDispatchToProps)(Login);
