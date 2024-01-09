import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getWorks } from '../utils/api';

export function Works() {
  const [works, setWorks] = useState();
  const { key } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getWorks(key)
      .then((response) => setWorks(response))
      .catch(() => navigate('/404'));
  }, [key, navigate]);

  return (
    works && (
      <>
        <h1>{works.title}</h1>
        <p>by</p>
        <p>{works.description}</p>
        <h1>Showing of editions</h1>
      </>
    )
  );
}
