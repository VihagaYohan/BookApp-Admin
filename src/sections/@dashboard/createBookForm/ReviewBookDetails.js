import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { CreateBookContext } from '../../../contexts/CreateBookContext';
import ReadOnlyLable from '../../../components/ReadOnlyLable';

const ReviewBookDetails = () => {
  const { bookName, rating, categories, language, author, bookInfo, content, reviews } = useContext(CreateBookContext);

  const fontColor = {
    style: { color: 'rgb(50, 50, 50)' },
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Review book details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Book Name" value={bookName} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Rating" value={rating} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Categories" value={categories} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Language" value={language} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Author" value={author} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Book Info" value={bookInfo} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="content" value={content} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReadOnlyLable lable="Reviews" value={reviews} />
        </Grid>
      </Grid>
    </>
  );
};

export default ReviewBookDetails;
