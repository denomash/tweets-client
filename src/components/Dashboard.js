import React from 'react';
import axios from 'axios';
import { Card, Avatar } from 'antd';
import Tweet from './Tweet';

class Dashboard extends React.Component {
  state = {
    tweets: []
  };

  componentDidMount = async () => {
    const response = await axios.get('/twitter/timeline');

    this.setState({ tweets: response.data });
  };
  render() {
    const { tweets } = this.state;
    return (
      <div className="twitter">
        <div className="content-container">
          <div className="u-margin-top-big">
            {tweets.map(tweet => {
              return <Tweet key={tweet.id} tweet={tweet} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
