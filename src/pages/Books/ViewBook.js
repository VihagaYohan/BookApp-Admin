import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

const ViewBook = () => {
  const { id } = useParams();

  return <div>ViewBook </div>;
};

export default ViewBook;
