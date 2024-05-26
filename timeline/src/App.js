
import React from 'react';
import Timeline from './components/Timeline';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>
        Forum Timeline
      </Typography>
      <Timeline />
    </Container>
  );
}

export default App;
