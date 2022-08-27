import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Container,
  TextField,
  Grid,
  Button,
  Stack,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
} from '@mui/material';
// components
import Page from '../../components/Page';

const CreateBook = () => {
  // useStates
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [categories, setCategories] = useState('');
  const [language, setLanguage] = useState('');
  const [rating, setRating] = useState(0);
  const [author, setAuthor] = useState('');

  // forms funtions

  const handleSubmit = () => {};
  const handleReset = () => {};

  return (
    <>
      <Page title="Create Book">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Create a Book
            </Typography>
            <Button variant="contained" component={RouterLink} to={'/dashboard/books'}>
              Back
            </Button>
          </Stack>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  autoComplete=""
                  type="text"
                  value={firstName}
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  autoComplete=""
                  type="text"
                  value={lastName}
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel text="demo-simple-select-label">Categories</InputLabel>
                  <Select
                    fullWidth
                    labeltext="demo-simple-select-label"
                    text="demo-simple-select"
                    value={categories}
                    label="Categories"
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <MenuItem value={'Manager'}>test</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  autoComplete=""
                  type="text"
                  value={language}
                  label="Language"
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel text="demo-simple-select-label">Rating</InputLabel>
                  <Select
                    fullWidth
                    labeltext="demo-simple-select-label"
                    text="demo-simple-select"
                    value={rating}
                    label="Rating"
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <MenuItem value={'0'}>0</MenuItem>
                    <MenuItem value={'1'}>1</MenuItem>
                    <MenuItem value={'2'}>2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel text="demo-simple-select-label">Author</InputLabel>
                  <Select
                    fullWidth
                    labeltext="demo-simple-select-label"
                    text="demo-simple-select"
                    value={author}
                    label="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                  >
                    <MenuItem value={'Will'}>will</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Page>
    </>
  );
};

export default CreateBook;
