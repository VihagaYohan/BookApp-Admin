import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

const ViewBook = () => {
  const { id } = useParams();

  return <div>ViewBook {id}</div>;
};

export default ViewBook;
