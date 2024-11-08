import React, { useState, useEffect } from 'react';
import { Snackbar, Button, Typography } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        message="This website uses cookies to enhance the user experience."
        action={
          <>
            <Button color="secondary" size="small" onClick={handleDecline}>
              Decline
            </Button>
            <Button color="primary" size="small" onClick={handleAccept}>
              Accept
            </Button>
          </>
        }
      />
    </div>
  );
}

export default App;
