import React, { useState } from 'react';

// material
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import CreateBookForm from '../../sections/@dashboard/createBookForm/CreateBookForm';
import { CreateBookContext } from '../../contexts/CreateBookContext';

const CreateBook = () => {
  // useStates
  const [bookName, setBookName] = useState('');
  const [categories, setCategories] = useState('');
  const [language, setLanguage] = useState('');
  const [rating, setRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [bookInfo, setBookInfo] = useState('');
  const [content, setContent] = useState('');
  const [reviews, setReviews] = useState('');

  // forms funtions

  const handleSubmit = () => {};
  const handleReset = () => {};

  return (
    <>
      <Page title="Create Book">
        <Container>
          <CreateBookContext.Provider
            value={{
              bookName,
              setBookName,
              rating,
              setRating,
              categories,
              setCategories,
              language,
              setLanguage,
              author,
              setAuthor,
              bookInfo,
              setBookInfo,
              content,
              setContent,
              reviews,
              setReviews,
            }}
          >
            <CreateBookForm bookName={bookName} setBookName={setBookName} />
          </CreateBookContext.Provider>
        </Container>
      </Page>
    </>
  );
};

export default CreateBook;
