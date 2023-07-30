import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';

const ContactPage: FunctionComponent = () => {
  return (
    <div>
      <Typography 
            variant="h2" 
            component="h1"
        >
            Contact Me
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

export default ContactPage;
