import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';

const BlogPage: FunctionComponent = () => {
  return (
    <div>
      <Typography 
            variant="h2" 
            component="h1"
        >
            Blog
        </Typography>
        <Typography 
            variant="body1" 
            component="p"
            marginTop={5}
            marginBottom={3}
        >
          Coming Soon...
        </Typography>
    </div>
  );
};

export default BlogPage;
