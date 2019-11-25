import React from 'react';
import { Card, Avatar } from 'antd';

const Tweet = ({ tweet }) => {
  return (
    <Card style={{ width: 500 }} className="u-margin-bottom-medium">
      <div className="tweet">
        <Avatar src={tweet.user.profile_image_url} size="large" />
        <div className="tweet__content">
          <div className="tweet__content-header">
            <h1>{tweet.user.screen_name}</h1>
            <p>@{tweet.user.name}</p>
          </div>

          <p>{tweet.text}</p>
        </div>
      </div>
    </Card>
  );
};

export default Tweet;
