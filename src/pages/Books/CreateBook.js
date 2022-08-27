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
import CreateBookForm from '../../sections/@dashboard/createBookForm/CreateBookForm';
import { CreateBookContext } from '../../contexts/CreateBookContext';

const CreateBook = () => {
  // useStates
  const [bookName, setBookName] = useState('');
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
          <CreateBookContext.Provider value={{ bookName, setBookName }}>
            <CreateBookForm bookName={bookName} setBookName={setBookName} />
          </CreateBookContext.Provider>
          {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Create a Book
            </Typography>
            <Button variant="contained" component={RouterLink} to={'/dashboard/books'}>
              Back
            </Button>
          </Stack> */}
          {/* <form onSubmit={handleSubmit} onReset={handleReset}>
            <Grid container spacing={2}>
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
            </Grid>
          </form> */}
        </Container>
      </Page>
    </>
  );
};

export default CreateBook;
