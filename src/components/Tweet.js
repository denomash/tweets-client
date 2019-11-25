import React, { Fragment } from 'react';
import moment from 'moment';
import { Card, Avatar } from 'antd';

const Tweet = ({ tweet }) => {
  console.log(tweet);

  return (
    <Fragment>
      {tweet.message ? (
        <Card style={{ width: 500 }} className="u-margin-bottom-medium">
          <div className="tweet__error">
            <h1>{tweet.message}</h1>
          </div>
        </Card>
      ) : (
        <Card style={{ width: 500 }} className="u-margin-bottom-medium">
          <div className="tweet">
            <Avatar src={tweet.user.profile_image_url} size="large" />
            <div className="tweet__content">
              <div className="tweet__content-header">
                <h1>{tweet.user.screen_name}</h1>
                <p>@{tweet.user.name}</p>
                <p>{moment(tweet.created_at).format('MMM DDD')}</p>
              </div>

              <p>{tweet.text}</p>
            </div>
          </div>
        </Card>
      )}
    </Fragment>
  );
};

export default Tweet;
