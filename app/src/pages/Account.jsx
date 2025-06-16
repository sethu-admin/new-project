import { Link as RouterLink } from 'react-router-dom'
import { Container, Typography, TextField, Button, Stack } from '@mui/material'

export default function Account() {
  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack spacing={3} width="100%">
        <Typography variant="h5" align="center">Create Account</Typography>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          sx={{ borderRadius: 2 }}
        >
          Create
        </Button>
      </Stack>
    </Container>
  )
}
