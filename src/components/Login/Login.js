import React from 'react';
import TwitterLogin from 'react-twitter-auth';

import { Layout } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends React.Component {
  onSuccess(response) {
    const { login } = this.props;

    response.json().then(body => {
      console.log(JSON.stringify(body));

      login(body.id);
    });
  }

  onFailed(error) {
    console.log(error);

    alert(error);
  }

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
  login: id => dispatch(login(id))
});

export default connect(null, mapDispatchToProps)(Login);
