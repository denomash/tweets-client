import React from 'react';

import TwitterLogin from 'react-twitter-auth';
import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {
  onSuccess(response) {
    response.json().then(body => {
      console.log(JSON.stringify(body));

      alert(JSON.stringify(body));
    });
  }

  onFailed(error) {
    console.log(error);

    alert(error);
  }

  render() {
    return (
      <div className="twitter">
        <TwitterLogin
          loginUrl="http://localhost:8080/auth/twitter"
          onFailure={this.onFailed}
          onSuccess={this.onSuccess}
          requestTokenUrl="http://localhost:8080/auth/twitter/reverse"
          forceLogin={true}
        />
      </div>
    );
  }
}

export default App;
