import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function ContactUs(props) {
    const handleEmailClick = () => {
        window.location.href = 'mailto:epnjh0807@gachon.ac.kr';
      };
    
      return (
        <Container
          component="section"
          sx={{ color: "#1b730e" ,display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
        >
          <Button
            sx={{
              border: '4px solid currentColor',
              borderRadius: 0,
              height: 'auto',
              py: 2,
              px: 5,
              color: "#0d0d0d"
            }}
            onClick={handleEmailClick}
          >
            <Typography variant="h4" component="span">
              Contact Us!
            </Typography>
          </Button>
        </Container>
      );
}

export default ContactUs;