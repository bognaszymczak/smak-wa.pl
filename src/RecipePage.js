import React from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { id } = useParams();
  return <div>Recipe ID: {id}</div>
};

export default RecipePage;