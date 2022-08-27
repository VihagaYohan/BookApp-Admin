import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl } from '@mui/material';

import { CreateBookContext } from '../../../contexts/CreateBookContext';

export default function BookDetailsForm() {
  const { setBookName } = useContext(CreateBookContext);
  const { bookName } = useContext(CreateBookContext);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Book details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Book name"
            value={bookName}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setBookName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="categories"
            name="categories"
            label="Categories"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="language"
            name="language"
            label="Language"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="author"
            name="author"
            label="Author"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}
