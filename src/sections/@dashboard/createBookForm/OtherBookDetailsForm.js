import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { InputLabel, MenuItem, Select } from '@mui/material';

import { CreateBookContext } from '../../../contexts/CreateBookContext';

const OtherBookDetailsForm = () => {
  const { setBookInfo, setContent, setReviews } = useContext(CreateBookContext);
  const { bookInfo, content, reviews } = useContext(CreateBookContext);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Other Book Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Book info"
            value={bookInfo}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setBookInfo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel style={{ fontSize: 11 }} text="demo-simple-select-label">
            Content
          </InputLabel>
          <Select
            required
            label="Content"
            value={content}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setContent(e.target.value)}
          >
            <MenuItem value={'test'}>test</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel style={{ fontSize: 11 }} text="demo-simple-select-label">
            Reviews
          </InputLabel>
          <Select
            required
            label="Reviews"
            value={reviews}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setReviews(e.target.value)}
          >
            <MenuItem value={'test'}>test</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </>
  );
};

export default OtherBookDetailsForm;
