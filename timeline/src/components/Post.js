import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const Post = ({ post, user }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {user.name}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
      </CardContent>
    </Card>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
